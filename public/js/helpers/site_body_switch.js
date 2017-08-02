
function site_body_switch(props) {
  let reactiveSiteBody = {}
  switch (props.selectedLayout) {
    case "tooMuchColor": {
      // reactiveSiteBody = props.layoutDetails[props.selectedLayout].bodyLayout //using this style results in grey after scrolling
      reactiveSiteBody = props.layoutDetails[props.selectedLayout].body
      //when i'm NOT using .bodyLayout i do NOT have the grey after scrolling
      //TODO: figure out wtf is causing the grey after scrolling //TODONE: adding background: "..." rules to tooMuchColor.body fixed this, since this was the element scolling beyond the 100vh site background.
    }
    break;
    case "twitterMimic": {
      reactiveSiteBody = props.layoutDetails[props.selectedLayout].body
    }
    break;
    case "facebookMimic": {
      reactiveSiteBody = props.layoutDetails[props.selectedLayout] //this works for current simplified facebookMimic, will likely need to change once i get actual styling involved

      console.log(`case of ${props.selectedLayout} in app.js switch for siteContainer styling`);
    }
    break;
    case "patreonMimic": {
      console.log(props, 'was props in site_body_switch');
      console.log(props.layoutDetails[props.selectedLayout], 'was props.layoutDetails[props.selectedLayout]');
      reactiveSiteBody = props.layoutDetails[props.selectedLayout].white_bg //this works for current simplified patreonMimic, will likely need to change once i get actual styling involved

      console.log(`case of ${props.selectedLayout} in app.js switch for siteContainer styling`);
    }
    break;
    case "amazonMimic": {
      reactiveSiteBody = props.layoutDetails[props.selectedLayout] //this works for current simplified amazonMimic, will likely need to change once i get actual styling involved

      console.log(`case of ${props.selectedLayout} in app.js switch for siteContainer styling`);
    }
    break;

    default:
    console.log("Something went to shit and no layout is selected. FIX. IT. This log coming from app.js");
  }

  return reactiveSiteBody
}

module.exports = site_body_switch
