

import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';
// import d3 from 'd3';

export default class Head extends React.Component {


  render(){

    // console.log(window.location, 'was window.location');
    // console.log(typeof window.location, 'was typeof for window.location'); //object
    // console.log(window.location.host, 'was window.location.host');
    let addy = window.location.host
    // console.log(addy, 'was addy');

    let bgStyleTealYellow = {
      background: "-webkit-linear-gradient(90deg, #42f4d7, #f7f76f)",
      background: "-moz-linear-gradient(90deg, #42f4d7, #f7f76f)",
      background: "linear-gradient(90deg, #42f4d7, #f7f76f)"
      // background: "transparent"
    }

    return(
      <div id="headContainer" style={bgStyleTealYellow}>
        <div >Welcome to {addy}!</div>
        <ul>
          <li><a href="../assets/PatrickMcWilliams.pdf">Resume</a></li>

          <li><a href="https://www.linkedin.com/in/mcwilliamspatrick">LinkedIn</a></li>
          <li><a href="https://github.com/MelanistOnca">GitHub</a></li>
          {/*<li><a href="">General Assembly</a></li>*/}
          {/*
          <li>Follow <a href="https://twitter.com/uroborosinc"> @UroborosInc</a> on Twitter</li>
          */} {/*find embed code to get the twitter icon*/}


        </ul>
        <div>Contact Me at Patrick.M.Professional [at] gmail [dot] com</div>








      </div>
    )
  }
}
