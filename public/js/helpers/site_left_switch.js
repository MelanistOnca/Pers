
function site_left_switch(state) {
  console.log('~~~~~~');
  console.log(state,'state');
  let reactiveSiteLeft = {}
  switch (state.selectedLayout) {
    case "tooMuchColor": {
      reactiveSiteLeft = state.layoutDetails[state.selectedLayout].left

      console.log(`case of ${state.selectedLayout} in app.js switch for siteContainer styling`);
    }
    break;
    case "twitterMimic": {
      reactiveSiteLeft = state.layoutDetails[state.selectedLayout].left
      // console.log(state.layoutDetails[state.selectedLayout].left , 'was state.layoutDetails[state.selectedLayout].left  in site_left_switch');

      // console.log(`case of ${state.selectedLayout} in app.js switch for siteContainer styling`);
      console.log('I probably want to subout the link text for icons with maybe mouseover descriptions?');
    }
    break;
    case "facebookMimic": {
      reactiveSiteLeft = state.layoutDetails[state.selectedLayout] //this works for current simplified facebookMimic, will likely need to change once i get actual styling involved

      console.log(`case of ${state.selectedLayout} in app.js switch for siteContainer styling`);
    }
    break;
    case "patreonMimic": {
      console.log(state, 'was state in site_left_switch');
      console.log(state.layoutDetails[state.selectedLayout], 'was state.layoutDetails[state.selectedLayout]');
      reactiveSiteLeft = state.layoutDetails[state.selectedLayout].white_bg //this works for current simplified patreonMimic, will likely need to change once i get actual styling involved

      console.log(`case of ${state.selectedLayout} in app.js switch for siteContainer styling`);
    }
    break;
    case "amazonMimic": {
      reactiveSiteLeft = state.layoutDetails[state.selectedLayout] //this works for current simplified amazonMimic, will likely need to change once i get actual styling involved

      console.log(`case of ${state.selectedLayout} in app.js switch for siteContainer styling`);
    }
    break;

    default:
    console.log("Something went to shit and no layout is selected. FIX. IT. This log coming from app.js");
  }

  return reactiveSiteLeft
}

module.exports = site_left_switch
