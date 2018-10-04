const express = require('express');
const router = express.Router();
const env = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[env];
const knex = require('knex')(config);

router.get('/', (req, res) => {
  knex('matches')
  .then((matches) => {
    res.send(matches);
  })
});

router.get('/:id', (req, res) => {
  const user_id = req.params.id;
  console.log('fetch call worked:  ~~~', user_id);
  let likedMatchesArr = [];
  let potentialMatchesArr = [];

  knex('matches')
  .where({
      user_a: user_id,
      match_a: true,
  })
  .orWhere({
      user_b: user_id,
      match_b: true,
  })
  .then((users)=>{

      users.forEach((user)=>{
        if(user.user_a===user_id){
            likedMatchesArr.push(user.user_b);
        } 
        else{
            likedMatchesArr.push(user.user_a);
        }
      });

  })
  .then(()=>{
    knex('users')
    .then(users=>{
        for (let i=0; i<users.length; i++){
            let k=0;
            for (let j=0; j<likedMatchesArr.length; j++){
                if(users[i].id===likedMatchesArr[j] || users[i].id===parseInt(user_id)){
                    k++;
                } 
            }
            if(k===0){
                potentialMatchesArr.push(users[i]);
            }
        }
        res.send(potentialMatchesArr);
    })
  })

  .catch((error) => {
    res.status(500)
    res.end(error.message);
  })
});




module.exports = router;