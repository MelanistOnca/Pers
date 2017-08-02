

import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';
// import d3 from 'd3';
import LayoutSelector from './subComponents/layoutSelector'
//this import probably doesn't need to be here with the switch

import site_header_switch from './helpers/site_header_switch'
import head_header_switch from './helpers/head_header_switch'

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



    // let layoutSelectorPresent = <div id="selectorPlaceholder"></div>
    //
    // if(this.props.selectedLayout !== 'twitterMimic') {
    //   layoutSelectorPresent =
    //   <LayoutSelector
    //     {...this.props}
    //     />
    // }
    // let welcomeDiv =
    // <div id="headContainer" style={bgStyleTealYellow}>

    // thingySet
    // // <p style={{margin:"inherit"}}>Welcome to {addy}!</p>
    // // <p style={{margin:"inherit"}}>Contact Me at Patrick.M.Professional [at] gmail [dot] com</p>
    // // <p style={{margin:"inherit"}}></p>
    // end of thingySet
    // let linkColorInherit = {color:"inherit"}
    // console.log(this.props.layoutDetails[this.props.selectedLayout], 'was this.props.layoutDetails[this.props.selectedLayout]');
    // let linkStyle =  this.props.layoutDetails[this.props.selectedLayout].linkText//for improved readability below
    // console.log(linkStyle, 'linkStyle before [...]');
    // let linkStyle = { ...this.props.layoutDetails[this.props.selectedLayout].linkText, ...this.props.layoutDetails[this.props.selectedLayout].splash }
    // console.log(linkStyle, 'linkStyle after [...]');

    // let splashStyle = this.props.layoutDetails[this.props.selectedLayout].splash
    // console.log(splashStyle);

    // let testCase = {linkStyle, splashStyle}
    // console.log(testCase, 'was testCase');
    // let headCase = head_header_switch(addy, this.props) //when i was calling head_header_switch(addy, this.props) directly in the {} below, i would occasionally get an error for layoutDetails props being undefined. setting the call to a variable seems to prevent this. //looks like this came back


    // {headCase}
    return(
      <div id="headContainer" style={site_header_switch(this.props)}>
        {head_header_switch(addy, this.props)}
      </div>
    )
  }
}

// <ul
//   style={{fontWeight: "bold"}}
//   >
//   <li><a style={splashStyle} href="../assets/PatrickMcWilliams.pdf">Resume</a></li>
//
//   <li><a style={linkStyle} href="https://www.linkedin.com/in/mcwilliamspatrick">LinkedIn</a></li>
//   <li><a style={linkStyle} href="https://github.com/MelanistOnca">GitHub</a></li>
//   {/*<li><a href="">General Assembly</a></li>*/}
//   {/*
//   <li>Follow <a href="https://twitter.com/uroborosinc"> @UroborosInc</a> on Twitter</li>
//   */} {/*find embed code to get the twitter icon*/}
//
//
// </ul>
// <ul id="welcome" style={this.props.layoutDetails[this.props.selectedLayout].welcome}
//   >
//   <li >Welcome to {addy}!</li>
//   <li >Contact Me at Patrick.M.Professional [at] gmail [dot] com</li>
// </ul>
// <p></p>
// {layoutSelectorPresent}
