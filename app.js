const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');
const app = express();
const port = process.env.PORT || 5000;

const usersRouter = require('./routes/users');
const loginRouter = require('./routes/login');
const matchesRouter = require('./routes/matches');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(logger('dev'));
app.use(cookieParser());

app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/matches', matchesRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
});

app.listen(port, () => {
  console.log(`API server listening on port ${port}...`);
})

module.exports = app;