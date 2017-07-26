

import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';
// import d3 from 'd3';
import LayoutSelector from './subComponents/layoutSelector'


import site_header_switch from './helpers/site_header_switch'

export default class Head extends React.Component {


  render(){
    // console.log(this.props, 'was this.props in head.js');
    // console.log(this.state, 'was this.state in head.js');
    // console.log(state, 'was state in head.js');
    // console.log(window.location, 'was window.location');
    // console.log(typeof window.location, 'was typeof for window.location'); //object
    // console.log(window.location.host, 'was window.location.host');
    let addy = window.location.host
    // console.log(addy, 'was addy');

    //NOTE sub this out with a case switch's return
    // let bgStyleTealYellow = {
    //   background: "-webkit-linear-gradient(90deg, #42f4d7, #f7f76f)",
    //   background: "-moz-linear-gradient(90deg, #42f4d7, #f7f76f)",
    //   background: "linear-gradient(90deg, #42f4d7, #f7f76f)"
    //   // background: "transparent"
    // }
    //NOTE end of sub out

    //TODO implement case switch and call it in style={CASE_SWITCH()}

    let layoutSelectorPresent = <div id="selectorPlaceholder"></div>

    if(this.props.selectedLayout !== 'twitterMimic') {
      layoutSelectorPresent =
      <LayoutSelector
        {...this.props}
        />
    }

    // <div id="headContainer" style={bgStyleTealYellow}>

    // thingySet
    // // <p style={{margin:"inherit"}}>Welcome to {addy}!</p>
    // // <p style={{margin:"inherit"}}>Contact Me at Patrick.M.Professional [at] gmail [dot] com</p>
    // // <p style={{margin:"inherit"}}></p>
    // end of thingySet
    // let linkColorInherit = {color:"inherit"}
    let linkStyle = this.props.layoutDetails[this.props.selectedLayout].linkText //for improved readability below

    return(
      <div id="headContainer" style={site_header_switch(this.props)}>

        <ul

          >
          <li><a style={linkStyle} href="../assets/PatrickMcWilliams.pdf">Resume</a></li>

          <li><a style={linkStyle} href="https://www.linkedin.com/in/mcwilliamspatrick">LinkedIn</a></li>
          <li><a style={linkStyle} href="https://github.com/MelanistOnca">GitHub</a></li>
          {/*<li><a href="">General Assembly</a></li>*/}
          {/*
          <li>Follow <a href="https://twitter.com/uroborosinc"> @UroborosInc</a> on Twitter</li>
          */} {/*find embed code to get the twitter icon*/}


        </ul>
        <ul id="welcome" style={this.props.layoutDetails[this.props.selectedLayout].welcome}
          >
          <li >Welcome to {addy}!</li>
          <li >Contact Me at Patrick.M.Professional [at] gmail [dot] com</li>
        </ul>
        <p></p>
        {layoutSelectorPresent}
      </div>
    )
  }
}
