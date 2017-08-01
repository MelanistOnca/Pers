

import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';

import IconAuthorAttrib from './subComponents/iconAuthorAttrib'

import site_footer_switch from './helpers/site_footer_switch'

export default class Foot extends React.Component {


  render(){
    // console.log(this.props, 'was this.props in foot');
    let resumeIconSrc = "./assets/icons/interface.svg"
    let portraitIconSrc = "./assets/icons/circle.svg"
    // let footStyle =

    let localListStyle = {
      listStyle: "none",
      // border: "1px solid black",
      paddingLeft: "0"
    }
    let localTextSize = {
      fontSize: "calc(5px + .3vh)",
      paddingLeft: "1px"
    }

    let iconAttrib;
    if(this.props.selectedLayout==="twitterMimic"){
      iconAttrib =
      <div id="attribCollection"
        style={localTextSize}
        >
        <ul style={localListStyle}>
          <li><IconAuthorAttrib
            {...this.props}
            iconImg={resumeIconSrc}
            iconAuthorLink={"https://smashicons.com/"}
            /></li>
          <li><IconAuthorAttrib
            {...this.props}
            iconImg={portraitIconSrc}
            iconAuthorLink={"http://www.freepik.com/"}
            /></li>
        </ul>
        both authors found at <a href="https://www.flaticon.com">www.flaticon.com</a>
      </div>
    } else {
      iconAttrib = <div id="iconAttribNotNeeded"></div>
    }
    return(
      <div id="footContainer"
        style={site_footer_switch(this.props)}
        >
        {/*<div><a>webform to send me e-mails without giving out my email address?</a></div>*/}
        {iconAttrib}
      </div>
    )
  }

}
