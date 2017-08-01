
function site_header_switch(props) {
  let reactiveSiteHeader = {}
  switch (props.selectedLayout) {
    case "tooMuchColor": {
      reactiveSiteHeader = props.layoutDetails[props.selectedLayout].header

      // console.log(`case of ${props.selectedLayout} in app.js switch for siteContainer styling`);
    }
    break;
    case "twitterMimic": {
      reactiveSiteHeader = props.layoutDetails[props.selectedLayout].header
      // console.log(props.layoutDetails[props.selectedLayout].header , 'was props.layoutDetails[props.selectedLayout].header  in site_header_switch');

      // console.log(`case of ${props.selectedLayout} in app.js switch for siteContainer styling`);
      // console.log('I probably want to subout the link text for icons with maybe mouseover descriptions?');
    }
    break;
    case "facebookMimic": {
      reactiveSiteHeader = props.layoutDetails[props.selectedLayout] //this works for current simplified facebookMimic, will likely need to change once i get actual styling involved

      console.log(`case of ${props.selectedLayout} in app.js switch for siteContainer styling`);
    }
    break;
    case "patreonMimic": {
      console.log(props, 'was props in site_header_switch');
      console.log(props.layoutDetails[props.selectedLayout], 'was props.layoutDetails[props.selectedLayout]');
      reactiveSiteHeader = props.layoutDetails[props.selectedLayout].white_bg //this works for current simplified patreonMimic, will likely need to change once i get actual styling involved

      console.log(`case of ${props.selectedLayout} in app.js switch for siteContainer styling`);
    }
    break;
    case "amazonMimic": {
      reactiveSiteHeader = props.layoutDetails[props.selectedLayout] //this works for current simplified amazonMimic, will likely need to change once i get actual styling involved

      console.log(`case of ${props.selectedLayout} in app.js switch for siteContainer styling`);
    }
    break;

    default:
    console.log("Something went to shit and no layout is selected. FIX. IT. This log coming from app.js");
  }

  return reactiveSiteHeader
}

module.exports = site_header_switch
