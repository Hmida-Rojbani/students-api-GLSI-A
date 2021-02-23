const express = require('express');
const morgan = require('morgan');
const config = require('config');
const appMain= require('debug')('app:main');
const appDb= require('debug')('app:db');
const student_router=require('./routers/students')
const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());
if(app.get('env')==='development')
    app.use(morgan('dev'));

appMain('Application name :',config.get('app_name'))
appMain('Application mode :',config.get('app_mode'))
appDb('Application DB URL :',config.get('db.url'))
appDb('Application DB password :',config.get('db.password'))

app.use('/api/students',student_router)

app.listen(port,()=> appMain(`Server running on ${port}...`));