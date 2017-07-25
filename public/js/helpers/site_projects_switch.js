
function site_projects_switch(state) {
  let reactiveSiteProjects = {}
  switch (state.selectedLayout) {
    case "tooMuchColor": {
      reactiveSiteProjects = state.layoutDetails[state.selectedLayout].project_bh

      // console.log(`case of ${state.selectedLayout} in app.js switch for siteContainer styling`);
    }
    break;
    case "twitterMimic": {
      reactiveSiteProjects = state.layoutDetails[state.selectedLayout].tweet
      // console.log(state.layoutDetails[state.selectedLayout].tweet , 'was state.layoutDetails[state.selectedLayout].tweet  in site_projects_switch');

      // console.log(`case of ${state.selectedLayout} in app.js switch for siteContainer styling`);
    }
    break;
    case "facebookMimic": {
      reactiveSiteProjects = state.layoutDetails[state.selectedLayout] //this works for current simplified facebookMimic, will likely need to change once i get actual styling involved

      console.log(`case of ${state.selectedLayout} in app.js switch for siteContainer styling`);
    }
    break;
    case "patreonMimic": {
      console.log(state, 'was state in site_projects_switch');
      console.log(state.layoutDetails[state.selectedLayout], 'was state.layoutDetails[state.selectedLayout]');
      reactiveSiteProjects = state.layoutDetails[state.selectedLayout].white_bg //this works for current simplified patreonMimic, will likely need to change once i get actual styling involved

      console.log(`case of ${state.selectedLayout} in app.js switch for siteContainer styling`);
    }
    break;
    case "amazonMimic": {
      reactiveSiteProjects = state.layoutDetails[state.selectedLayout] //this works for current simplified amazonMimic, will likely need to change once i get actual styling involved

      console.log(`case of ${state.selectedLayout} in app.js switch for siteContainer styling`);
    }
    break;

    default:
    console.log("Something went to shit and no layout is selected. FIX. IT. This log coming from app.js");
  }

  return reactiveSiteProjects
}

module.exports = site_projects_switch
