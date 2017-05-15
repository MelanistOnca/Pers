'use strict'
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

// const React = require('react') ;
// // import { renderToString } from 'react-dom/server';
// const ReactDOM = require('react-dom/server');
// const Site = require('./public/js/site') ;
// const Site = React.createFactory(require('./public/js/site')) ;

const app = express();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.get('/', (req, res) => {
//   const appString = ReactDom.renderToString(Site);
//
//   res.send(template({
//     body: appString,
//     title: 'Patrick M',
//   }));
// });

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`Your personal page server is running on port ${port}`);
})
