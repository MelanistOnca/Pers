'use strict'
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
// var thingy = require('./serveFromBack')
// var Thingy = require('./serveFromBack')

// thingy()
// Thingy()
// console.log(thingy);
// thingy
// thingy
// console.log(thingy);

// const React = require('react') ;
// // import { renderToString } from 'react-dom/server';
const ReactDOM = require('react-dom/server');
const ReactDOMServer = require('react-dom/server');
// const Site = require('./public/js/site') ;
// const App = require('./public/js/app') ;
// const Site = React.createFactory(require('./public/js/site')) ;
// console.log(ReactDOMServer, 'was ReactDOMServer');
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
// console.log('bullshit log');
// var shit = require('express').Router()
//
// shit.get('/', function(req, res){
//   console.log('hello');
// })


app.get('/', (req,res) => {
  console.log('--------');
  console.log(ReactDOMServer);
  console.log('--------');
  // ReactDOMServer.renderToString('<h1>hello world</h1>')
})
// app.get('/', (req,res) => {
//   console.log('bla');
//   res.sendFile(path.join(__dirname, 'public/index.html'))
// })
app.get('/fuck', (req,res) => {
  console.log('fuck you');
  ReactDOMServer.renderToString(App)
  console.log('fuck you');
})

const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`Your personal page server is running on port ${port}`);
})
