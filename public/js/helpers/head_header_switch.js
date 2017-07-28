import React from 'react';
import LayoutSelector from '../subComponents/layoutSelector'

function head_header_switch(address, props) {
  let reactiveHeadHeader = {}
  let linkStyle =  props.layoutDetails[props.selectedLayout].linkText//for improved readability below
  // let splashStyle = props.layoutDetails[props.selectedLayout].splash
  let welcomeStyle = props.layoutDetails[props.selectedLayout].welcome //only using once currently, if not used again subout the variable for the object tree in the ul below

  let welcomeString = `Welcome to ${address}!`
  let contactString = "Contact Me at Patrick.M.Professional [at] gmail [dot] com"
  let linkList =
  <ul
    style={{fontWeight: "bold"}}
    >
    <li><a style={linkStyle} href="../assets/PatrickMcWilliams.pdf">Resume</a></li>

    <li><a style={linkStyle} href="https://www.linkedin.com/in/mcwilliamspatrick">LinkedIn</a></li>
    <li><a style={linkStyle} href="https://github.com/MelanistOnca">GitHub</a></li>
    {/*<li><a href="">General Assembly</a></li>*/}
    {/*
    <li>Follow <a href="https://twitter.com/uroborosinc"> @UroborosInc</a> on Twitter</li>
    */} {/*find embed code to get the twitter icon*/}


  </ul>
  switch (props.selectedLayout) {
    case "tooMuchColor": {
      reactiveHeadHeader =
      <div>
        <div id="welcome">
          {welcomeString}
        </div>
        {linkList}
        <div>{contactString}</div>

        <LayoutSelector
          {...props}
          />
      </div>


      console.log(`case of ${props.selectedLayout} in app.js switch for headContainer styling`);
    }
    break;
    case "twitterMimic": {
      reactiveHeadHeader =
      <div>
        {linkList}
        <ul id="welcome" style={welcomeStyle}
          >
          <li >{welcomeString}</li>
          <li >{contactString}</li>
        </ul>
        <p></p>
      </div>

      // {layoutSelectorPresent}
      console.log('I probably want to subout the link text for icons with maybe mouseover descriptions?');
    }
    break;
    case "facebookMimic": {
      reactiveHeadHeader = props.layoutDetails[props.selectedLayout] //this works for current simplified facebookMimic, will likely need to change once i get actual styling involved

      console.log(`case of ${props.selectedLayout} in app.js switch for headContainer styling`);
    }
    break;
    case "patreonMimic": {
      console.log(props, 'was props in head_header_switch');
      console.log(props.layoutDetails[props.selectedLayout], 'was props.layoutDetails[props.selectedLayout]');
      reactiveHeadHeader = props.layoutDetails[props.selectedLayout].white_bg //this works for current simplified patreonMimic, will likely need to change once i get actual styling involved

      console.log(`case of ${props.selectedLayout} in app.js switch for headContainer styling`);
    }
    break;
    case "amazonMimic": {
      reactiveHeadHeader = props.layoutDetails[props.selectedLayout] //this works for current simplified amazonMimic, will likely need to change once i get actual styling involved

      console.log(`case of ${props.selectedLayout} in app.js switch for headContainer styling`);
    }
    break;

    default:
    console.log("Something went to shit and no layout is selected. FIX. IT. This log coming from app.js");
  }

  return reactiveHeadHeader
}

module.exports = head_header_switch
