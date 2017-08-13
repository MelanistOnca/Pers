
function site_bg_switch(state) {
  // console.log(state, 'was state in site_bg_switch');
  let reactiveSiteBG = {}
  switch (state.selectedLayout) {
    case "tooMuchColor": {
      reactiveSiteBG = state.layoutDetails[state.selectedLayout].site

    }
    break;
    case "twitterMimic": {
      console.log(`case of ${state.selectedLayout} in app.js switch for headContainer styling`);
      reactiveSiteBG = state.layoutDetails[state.selectedLayout].site
    }
    break;
    case "facebookMimic": {
      reactiveSiteBG = state.layoutDetails[state.selectedLayout] //this works for current simplified facebookMimic, will likely need to change once i get actual styling involved

      console.log(`case of ${state.selectedLayout} in app.js switch for siteContainer styling`);
    }
    break;
    case "patreonMimic": {
      console.log(state, 'was state in site_bg_switch');
      console.log(state.layoutDetails[state.selectedLayout], 'was state.layoutDetails[state.selectedLayout]');
      reactiveSiteBG = state.layoutDetails[state.selectedLayout].white_bg //this works for current simplified patreonMimic, will likely need to change once i get actual styling involved

      console.log(`case of ${state.selectedLayout} in app.js switch for siteContainer styling`);
    }
    break;
    case "amazonMimic": {
      reactiveSiteBG = state.layoutDetails[state.selectedLayout] //this works for current simplified amazonMimic, will likely need to change once i get actual styling involved

      console.log(`case of ${state.selectedLayout} in app.js switch for siteContainer styling`);
    }
    break;

    default:
    console.log("Something went to shit and no layout is selected. FIX. IT. This log coming from app.js");
  }

  return reactiveSiteBG
}

module.exports = site_bg_switch
