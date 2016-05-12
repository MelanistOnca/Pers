'use strict';
console.log('app.js ran');
// const React = require('react');
// const ReactDOM = require('react-dom');
// const $ = require('jquery');

import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';
import Head from './head'

// export default class App extends React.Component {
//   render() {
//
//     return (
//       test
//     );
//   }
// }

render(
  (
    <Head
      />
  ),
  // $('#container')
  document.getElementById('container')

)
