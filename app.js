// import express from 'express';
// import createError from 'http-errors';
// import path from 'path';
// import cookieParser from 'cookie-parser';
// import logger from 'morgan';

// import indexRouter from './routes/index.js';
// import usersRouter from './routes/users.js';

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const logsRouter = require('./routes/logs');
const usersRouter = require('./routes/users');

const app = express();
// const __dirname = path.dirname(new URL(import.meta.url).pathname);
// const __dirname = (() => {let x = path.dirname(decodeURI(new URL(import.meta.url).pathname)); return path.resolve( (process.platform === "win32") ? x.substr(1) : x ); })();
// console.log(__dirname);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
// app.set('views', './views');
// console.log(path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/logs', logsRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
// export default app;
