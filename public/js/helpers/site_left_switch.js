
function site_left_switch(props) {
  // console.log('~~~~~~');
  // console.log(props,'props');
  let reactiveSiteLeft = {}
  switch (props.selectedLayout) {
    case "tooMuchColor": {
      reactiveSiteLeft = props.layoutDetails[props.selectedLayout].left
    }
    break;
    case "twitterMimic": {
      reactiveSiteLeft = props.layoutDetails[props.selectedLayout].left
    }
    break;
    case "facebookMimic": {
      reactiveSiteLeft = props.layoutDetails[props.selectedLayout] //this works for current simplified facebookMimic, will likely need to change once i get actual styling involved

      console.log(`case of ${props.selectedLayout} in app.js switch for siteContainer styling`);
    }
    break;
    case "patreonMimic": {
      console.log(props, 'was props in site_left_switch');
      console.log(props.layoutDetails[props.selectedLayout], 'was props.layoutDetails[props.selectedLayout]');
      reactiveSiteLeft = props.layoutDetails[props.selectedLayout].white_bg //this works for current simplified patreonMimic, will likely need to change once i get actual styling involved

      console.log(`case of ${props.selectedLayout} in app.js switch for siteContainer styling`);
    }
    break;
    case "amazonMimic": {
      reactiveSiteLeft = props.layoutDetails[props.selectedLayout] //this works for current simplified amazonMimic, will likely need to change once i get actual styling involved

      console.log(`case of ${props.selectedLayout} in app.js switch for siteContainer styling`);
    }
    break;

    default:
    console.log("Something went to shit and no layout is selected. FIX. IT. This log coming from app.js");
  }

  return reactiveSiteLeft
}

module.exports = site_left_switch
