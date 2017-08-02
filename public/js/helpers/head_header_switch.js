import React from 'react';
import LayoutSelector from '../subComponents/layoutSelector'

function head_header_switch(address, props) {
  let reactiveHeadHeader = {}
  // console.log(props.selectedLayout, 'was props.selectedLayout');
  // console.log(props.layoutDetails[props.selectedLayout], 'was props.layoutDetails[props.selectedLayout]');
  // console.log('$$$$$$$');
  let linkStyle =  props.layoutDetails[props.selectedLayout].linkText//for improved readability below
  let welcomeStyle = props.layoutDetails[props.selectedLayout].welcome //only using once currently, if not used again subout the variable for the object tree in the ul below
  let headLayout = props.layoutDetails[props.selectedLayout].headLayout

  let removeUlPadding = {paddingLeft: "0"}

  let welcomeString = `Welcome to ${address}!`
  let contactString = "Contact Me at Patrick.M.Professional [at] gmail [dot] com"
  let linkList =
  <ul>
    <li><a style={linkStyle} href="../assets/PatrickMcWilliams.pdf">Resume (.pdf)</a></li>
    <li><a style={linkStyle} href="../assets/PatrickMcWilliams.docx">Resume (.docx)</a></li>

    <li><a style={linkStyle} href="https://www.linkedin.com/in/mcwilliamspatrick">LinkedIn</a></li>
    <li><a style={linkStyle} href="https://github.com/MelanistOnca">GitHub</a></li>
    {/*<li><a href="">General Assembly</a></li>*/}
  </ul>

  let iconRoute = '../../assets/icons/'
  let iconStyle = {
    height: "23px",
    width: "23px",
  }
  let iconList =
  <div style={{gridColumn: "1"}}>
    <ul style={removeUlPadding}>
      <li><ul style={removeUlPadding}>
        <li style={{borderRight: "1px rgb(230, 236, 240) solid"}}>
          <a href={"../assets/PatrickMcWilliams.pdf"}
            title="Resume PDF">
            <img
              src={`${iconRoute}interface.svg`}
              alt="Resume"
              style={iconStyle}
              />
          </a>
          PDF
        </li>
        <li>
          <a href={"../assets/PatrickMcWilliams.docx"}
            title="Resume .docx">
            <img
              src={`${iconRoute}interface.svg`}
              alt="Resume"
              style={iconStyle}
              />
          </a>
          DOCX
        </li>
      </ul></li>

      <li>
        <a href={"https://www.linkedin.com/in/mcwilliamspatrick"}
          title="LinkedIn">
          <img
            src={`${iconRoute}In-2C-66px-TM.png`}
            alt="LinkedIn"
            style={iconStyle}
            />
        </a>
      </li>
      <li>
        <a href={"https://github.com/MelanistOnca"}
          title="GitHub">
          <img
            src={`${iconRoute}GitHub-Mark-64px.png`}
            alt="GitHub"
            style={iconStyle}
            />
        </a>
      </li>
    </ul>
  </div>


  //
  switch (props.selectedLayout) {
    case "tooMuchColor": {
      if(props.initialLayoutSelected===true){
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
      } else {
        reactiveHeadHeader =
        <div>
          <div id="welcome">
            {welcomeString}
          </div>
          {linkList}
          <div>{contactString}</div>
        </div>
      }

    }
    break;
    case "twitterMimic": {
      reactiveHeadHeader =
      <div>
        <div id="iconList" style={headLayout}>
          {iconList}
          <div style={{gridColumn: "2"}}></div>
        </div>
        <div id="welcomeAndContact">
          <ul id="welcome" style={welcomeStyle}
            >
            <li >{welcomeString}</li>
            <li >{contactString}</li>
          </ul>
        </div>
        <p></p>
      </div>

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
