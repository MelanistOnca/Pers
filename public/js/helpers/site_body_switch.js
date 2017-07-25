
function site_body_switch(state) {
  let reactiveSiteBody = {}
  switch (state.selectedLayout) {
    case "tooMuchColor": {
      reactiveSiteBody = state.layoutDetails[state.selectedLayout].left

      console.log(`case of ${state.selectedLayout} in app.js switch for siteContainer styling`);
    }
    break;
    case "twitterMimic": {
      reactiveSiteBody = state.layoutDetails[state.selectedLayout].body
      // console.log(state.layoutDetails[state.selectedLayout].left , 'was state.layoutDetails[state.selectedLayout].left  in site_left_switch');

      // console.log(`case of ${state.selectedLayout} in app.js switch for siteContainer styling`);
      console.log('I probably want to subout the link text for icons with maybe mouseover descriptions?');
    }
    break;
    case "facebookMimic": {
      reactiveSiteBody = state.layoutDetails[state.selectedLayout] //this works for current simplified facebookMimic, will likely need to change once i get actual styling involved

      console.log(`case of ${state.selectedLayout} in app.js switch for siteContainer styling`);
    }
    break;
    case "patreonMimic": {
      console.log(state, 'was state in site_body_switch');
      console.log(state.layoutDetails[state.selectedLayout], 'was state.layoutDetails[state.selectedLayout]');
      reactiveSiteBody = state.layoutDetails[state.selectedLayout].white_bg //this works for current simplified patreonMimic, will likely need to change once i get actual styling involved

      console.log(`case of ${state.selectedLayout} in app.js switch for siteContainer styling`);
    }
    break;
    case "amazonMimic": {
      reactiveSiteBody = state.layoutDetails[state.selectedLayout] //this works for current simplified amazonMimic, will likely need to change once i get actual styling involved

      console.log(`case of ${state.selectedLayout} in app.js switch for siteContainer styling`);
    }
    break;

    default:
    console.log("Something went to shit and no layout is selected. FIX. IT. This log coming from app.js");
  }

  return reactiveSiteBody
}

module.exports = site_body_switch
