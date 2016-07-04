

import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';

export default class Head extends React.Component {


  render(){

    return(
      <div id="headContainer">
        <div>Welcome to UroborosInc.com!</div>
        <ul>
          <li><a href="https://www.linkedin.com/in/mcwilliamspatrick">LinkedIn</a></li>
          <li><a href="https://github.com/MelanistOnca">GitHub</a></li>
          {/*<li><a href="">General Assembly</a></li>*/}
          <li>Follow <a href="https://twitter.com/uroborosinc"> @UroborosInc</a> on Twitter</li> {/*find embed code to get the twitter icon*/}

        </ul>








      </div>
    )
  }
}
