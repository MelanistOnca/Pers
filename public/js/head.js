'use strict';
console.log('head.js ran');

import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';

const Head = React.createClass({

  render : function() {


    return (
      <div id="headContainer">
        <div>Welcome</div>
        <div>to the personal page of</div>
        <div>Patrick McWilliams!</div>
      </div>
    )
  }

})

export default Head;
