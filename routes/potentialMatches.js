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
  const user_id = parseInt(req.params.id);
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
    .orderBy('id', 'asc')
    .then(users=>{

        function checkMatches(match){
          for (let j=0; j<likedMatchesArr.length; j++){
            if((match.id===likedMatchesArr[j])){
                return true;
            } 
          }
          return false;
        }
        for (let i=0; i<users.length; i++){

            if(!((users[i].id===user_id) || (users[i].seeking_female===true && users[user_id].gender==='m') || 
            (users[i].seeking_male===true && users[user_id].gender==='f') || (users[i].gender==='m' && users[user_id].seeking_male===false) ||  
            (users[i].gender==='f' && users[user_id].seeking_female===false) || checkMatches(users[i]))) {
                potentialMatchesArr.push(users[i]);
                }
        }
    })
    .then(()=>{
        res.send(potentialMatchesArr);
    })
  })

  .catch((error) => {
    res.status(500)
    res.end(error.message);
  })
});




module.exports = router;