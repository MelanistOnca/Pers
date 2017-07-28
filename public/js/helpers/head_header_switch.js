import LayoutSelector from '../subComponents/layoutSelector'

function head_header_switch(address, props) {
  let reactiveHeadHeader = {}
  let linkStyle =  props.layoutDetails[props.selectedLayout].linkText//for improved readability below
  let splashStyle = props.layoutDetails[props.selectedLayout].splash
  let welcomeStyle = style={props.layoutDetails[props.selectedLayout].welcome

  let welcomeString = `Welcome to ${address}!`
  let contactString = "Contact Me at Patrick.M.Professional [at] gmail [dot] com"
  let linkList =
  <ul
    style={{fontWeight: "bold"}}
    >
    <li><a style={splashStyle} href="../assets/PatrickMcWilliams.pdf">Resume</a></li>

    <li><a style={linkStyle} href="https://www.linkedin.com/in/mcwilliamspatrick">LinkedIn</a></li>
    <li><a style={linkStyle} href="https://github.com/MelanistOnca">GitHub</a></li>
    {/*<li><a href="">General Assembly</a></li>*/}
    {/*
    <li>Follow <a href="https://twitter.com/uroborosinc"> @UroborosInc</a> on Twitter</li>
    */} {/*find embed code to get the twitter icon*/}


  </ul>
  switch (state.selectedLayout) {
    case "tooMuchColor": {
      reactiveHeadHeader =
      <div id="welcome">
        {welcomeString}
      </div>
      {linkList}
      <div>{contactString}</div>
      <LayoutSelector
        {...props}
        />

      console.log(`case of ${state.selectedLayout} in app.js switch for headContainer styling`);
    }
    break;
    case "twitterMimic": {
      reactiveHeadHeader =
      {linkList}
      <ul id="welcome" style={props.layoutDetails[props.selectedLayout].welcome}
        >
        <li >{welcomeString}</li>
        <li >{contactString}</li>
      </ul>
      <p></p>
      {layoutSelectorPresent}
      console.log('I probably want to subout the link text for icons with maybe mouseover descriptions?');
    }
    break;
    case "facebookMimic": {
      reactiveHeadHeader = state.layoutDetails[state.selectedLayout] //this works for current simplified facebookMimic, will likely need to change once i get actual styling involved

      console.log(`case of ${state.selectedLayout} in app.js switch for headContainer styling`);
    }
    break;
    case "patreonMimic": {
      console.log(state, 'was state in head_header_switch');
      console.log(state.layoutDetails[state.selectedLayout], 'was state.layoutDetails[state.selectedLayout]');
      reactiveHeadHeader = state.layoutDetails[state.selectedLayout].white_bg //this works for current simplified patreonMimic, will likely need to change once i get actual styling involved

      console.log(`case of ${state.selectedLayout} in app.js switch for headContainer styling`);
    }
    break;
    case "amazonMimic": {
      reactiveHeadHeader = state.layoutDetails[state.selectedLayout] //this works for current simplified amazonMimic, will likely need to change once i get actual styling involved

      console.log(`case of ${state.selectedLayout} in app.js switch for headContainer styling`);
    }
    break;

    default:
    console.log("Something went to shit and no layout is selected. FIX. IT. This log coming from app.js");
  }

  return reactiveHeadHeader
}

module.exports = head_header_switch
