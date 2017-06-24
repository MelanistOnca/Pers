// 'use strict';

// const React = require('react');
// const ReactDOM = require('react-dom');
// const $ = require('jquery');

import React from 'react';
import { render, ReactDOMServer } from 'react-dom';

import $ from 'jquery';
import Site from './site';
import Test from './test2';

import Head from './head';
import Body from './body';
import Foot from './foot';

// console.log(typeof 'sdgsadg');
// console.log(typeof Test);




// ReactDOMServer.renderToString('<h1>fuck you</h1>')
// import Head from './head'

// export default class App extends React.Component {
//   render() {
//
//     return (
//       test
//     );
//   }
// }

// render(
//   (
//     <Head
//       />
//   ),
//   // $('#container')
//   document.getElementById('container')
//
// )
// export default class Test extends React.Component{
//
//
// //   render(){
// //     let styles = {
// //       background: "red"
// //     }
// //     return(
// //
// //       <div id="gay" style={styles}>
// //         gay
// //       </div>
// //     )
// //   }
// //
// //
// //
// // }

render(
  (
    <div id="siteContainer">
      {/*
        <Test
        />
        */}
      <Head
        />

      <Body
        />

      <Foot
        />
    </div>
  ),
  // $('#container')
  document.getElementById('container')

)
console.log('app.js loaded');
