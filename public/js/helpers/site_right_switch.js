
function site_right_switch(state) {
  let reactiveSiteRight = {}
  switch (state.selectedLayout) {
    case "tooMuchColor": {
      reactiveSiteRight = state.layoutDetails[state.selectedLayout].right

      console.log(`case of ${state.selectedLayout} in app.js switch for siteContainer styling`);
    }
    break;
    case "twitterMimic": {
      reactiveSiteRight = state.layoutDetails[state.selectedLayout].right
      // console.log(state.layoutDetails[state.selectedLayout].right , 'was state.layoutDetails[state.selectedLayout].right  in site_right_switch');

      // console.log(`case of ${state.selectedLayout} in app.js switch for siteContainer styling`);
      console.log('I probably want to subout the link text for icons with maybe mouseover descriptions?');
    }
    break;
    case "facebookMimic": {
      reactiveSiteRight = state.layoutDetails[state.selectedLayout] //this works for current simplified facebookMimic, will likely need to change once i get actual styling involved

      console.log(`case of ${state.selectedLayout} in app.js switch for siteContainer styling`);
    }
    break;
    case "patreonMimic": {
      console.log(state, 'was state in site_right_switch');
      console.log(state.layoutDetails[state.selectedLayout], 'was state.layoutDetails[state.selectedLayout]');
      reactiveSiteRight = state.layoutDetails[state.selectedLayout].white_bg //this works for current simplified patreonMimic, will likely need to change once i get actual styling involved

      console.log(`case of ${state.selectedLayout} in app.js switch for siteContainer styling`);
    }
    break;
    case "amazonMimic": {
      reactiveSiteRight = state.layoutDetails[state.selectedLayout] //this works for current simplified amazonMimic, will likely need to change once i get actual styling involved

      console.log(`case of ${state.selectedLayout} in app.js switch for siteContainer styling`);
    }
    break;

    default:
    console.log("Something went to shit and no layout is selected. FIX. IT. This log coming from app.js");
  }

  return reactiveSiteRight
}

module.exports = site_right_switch
