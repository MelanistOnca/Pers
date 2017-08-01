
function site_projects_switch(props) {
  let reactiveSiteProjects = {}
  switch (props.selectedLayout) {
    case "tooMuchColor": {
      reactiveSiteProjects = props.layoutDetails[props.selectedLayout].project_bg

      // console.log(`case of ${props.selectedLayout} in app.js switch for siteContainer styling`);
    }
    break;
    case "twitterMimic": {
      reactiveSiteProjects = props.layoutDetails[props.selectedLayout].tweet
      // console.log(props.layoutDetails[props.selectedLayout].tweet , 'was props.layoutDetails[props.selectedLayout].tweet  in site_projects_switch');

      // console.log(`case of ${props.selectedLayout} in app.js switch for siteContainer styling`);
    }
    break;
    case "facebookMimic": {
      reactiveSiteProjects = props.layoutDetails[props.selectedLayout] //this works for current simplified facebookMimic, will likely need to change once i get actual styling involved

      console.log(`case of ${props.selectedLayout} in app.js switch for siteContainer styling`);
    }
    break;
    case "patreonMimic": {
      console.log(props, 'was props in site_projects_switch');
      console.log(props.layoutDetails[props.selectedLayout], 'was props.layoutDetails[props.selectedLayout]');
      reactiveSiteProjects = props.layoutDetails[props.selectedLayout].white_bg //this works for current simplified patreonMimic, will likely need to change once i get actual styling involved

      console.log(`case of ${props.selectedLayout} in app.js switch for siteContainer styling`);
    }
    break;
    case "amazonMimic": {
      reactiveSiteProjects = props.layoutDetails[props.selectedLayout] //this works for current simplified amazonMimic, will likely need to change once i get actual styling involved

      console.log(`case of ${props.selectedLayout} in app.js switch for siteContainer styling`);
    }
    break;

    default:
    console.log("Something went to shit and no layout is selected. FIX. IT. This log coming from app.js");
  }

  return reactiveSiteProjects
}

module.exports = site_projects_switch
