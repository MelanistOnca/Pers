
function site_right_switch(props) {
  let reactiveSiteRight = {}
  switch (props.selectedLayout) {
    case "tooMuchColor": {
      reactiveSiteRight = props.layoutDetails[props.selectedLayout].right
    }
    break;
    case "twitterMimic": {
      console.log(`case of ${props.selectedLayout} in app.js switch for headContainer styling`);
      reactiveSiteRight = props.layoutDetails[props.selectedLayout].right
    }
    break;
    case "facebookMimic": {
      reactiveSiteRight = props.layoutDetails[props.selectedLayout] //this works for current simplified facebookMimic, will likely need to change once i get actual styling involved

      console.log(`case of ${props.selectedLayout} in app.js switch for siteContainer styling`);
    }
    break;
    case "patreonMimic": {
      console.log(props, 'was props in site_right_switch');
      console.log(props.layoutDetails[props.selectedLayout], 'was props.layoutDetails[props.selectedLayout]');
      reactiveSiteRight = props.layoutDetails[props.selectedLayout].white_bg //this works for current simplified patreonMimic, will likely need to change once i get actual styling involved

      console.log(`case of ${props.selectedLayout} in app.js switch for siteContainer styling`);
    }
    break;
    case "amazonMimic": {
      reactiveSiteRight = props.layoutDetails[props.selectedLayout] //this works for current simplified amazonMimic, will likely need to change once i get actual styling involved

      console.log(`case of ${props.selectedLayout} in app.js switch for siteContainer styling`);
    }
    break;

    default:
    console.log("Something went to shit and no layout is selected. FIX. IT. This log coming from app.js");
  }

  return reactiveSiteRight
}

module.exports = site_right_switch
