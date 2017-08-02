
function site_footer_switch(props) {
  let reactiveSiteFooter = {}
  switch (props.selectedLayout) {
    case "tooMuchColor": {
      reactiveSiteFooter = props.layoutDetails[props.selectedLayout].footer

    }
    break;
    case "twitterMimic": {
      reactiveSiteFooter = props.layoutDetails[props.selectedLayout].footer
  
    }
    break;
    case "facebookMimic": {
      reactiveSiteFooter = props.layoutDetails[props.selectedLayout] //this works for current simplified facebookMimic, will likely need to change once i get actual styling involved

      console.log(`case of ${props.selectedLayout} in app.js switch for siteContainer styling`);
    }
    break;
    case "patreonMimic": {
      console.log(props, 'was props in site_footer_switch');
      console.log(props.layoutDetails[props.selectedLayout], 'was props.layoutDetails[props.selectedLayout]');
      reactiveSiteFooter = props.layoutDetails[props.selectedLayout].white_bg //this works for current simplified patreonMimic, will likely need to change once i get actual styling involved

      console.log(`case of ${props.selectedLayout} in app.js switch for siteContainer styling`);
    }
    break;
    case "amazonMimic": {
      reactiveSiteFooter = props.layoutDetails[props.selectedLayout] //this works for current simplified amazonMimic, will likely need to change once i get actual styling involved

      console.log(`case of ${props.selectedLayout} in app.js switch for siteContainer styling`);
    }
    break;

    default:
    console.log("Something went to shit and no layout is selected. FIX. IT. This log coming from app.js");
  }

  return reactiveSiteFooter
}

module.exports = site_footer_switch
