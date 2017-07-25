
function site_header_switch(state) {
  let reactiveSiteHeader = {}
  switch (state.selectedLayout) {
    case "tooMuchColor": {
      reactiveSiteHeader = state.layoutDetails[state.selectedLayout].header

      console.log(`case of ${state.selectedLayout} in app.js switch for siteContainer styling`);
    }
    break;
    case "twitterMimic": {
      reactiveSiteHeader = state.layoutDetails[state.selectedLayout].header
      // console.log(state.layoutDetails[state.selectedLayout].header , 'was state.layoutDetails[state.selectedLayout].header  in site_header_switch');

      // console.log(`case of ${state.selectedLayout} in app.js switch for siteContainer styling`);
      console.log('I probably want to subout the link text for icons with maybe mouseover descriptions?');
    }
    break;
    case "facebookMimic": {
      reactiveSiteHeader = state.layoutDetails[state.selectedLayout] //this works for current simplified facebookMimic, will likely need to change once i get actual styling involved

      console.log(`case of ${state.selectedLayout} in app.js switch for siteContainer styling`);
    }
    break;
    case "patreonMimic": {
      console.log(state, 'was state in site_header_switch');
      console.log(state.layoutDetails[state.selectedLayout], 'was state.layoutDetails[state.selectedLayout]');
      reactiveSiteHeader = state.layoutDetails[state.selectedLayout].white_bg //this works for current simplified patreonMimic, will likely need to change once i get actual styling involved

      console.log(`case of ${state.selectedLayout} in app.js switch for siteContainer styling`);
    }
    break;
    case "amazonMimic": {
      reactiveSiteHeader = state.layoutDetails[state.selectedLayout] //this works for current simplified amazonMimic, will likely need to change once i get actual styling involved

      console.log(`case of ${state.selectedLayout} in app.js switch for siteContainer styling`);
    }
    break;

    default:
    console.log("Something went to shit and no layout is selected. FIX. IT. This log coming from app.js");
  }

  return reactiveSiteHeader
}

module.exports = site_header_switch
