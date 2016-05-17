

import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';

export default class Body extends React.Component {


  render(){


    return(
      <div id="otherLinkContainer">
        <ul>
          <li><a href="">link to something else that I haven't categorized yet.</a></li>
        </ul>
        <p>axis preference here depends on what we end up dealing with</p>
      </div>
    )
  }
}
