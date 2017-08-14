//NOTE NOTE NOTE the thing where you can 'scroll' through left/right like on amazon is i believe called a carousel


//localized styles in the elements themselves take precedence over inherited styles. May need to adjust what/how is locally styled for button-press restyling to work

//NOTE INFO FROM MDN on BOX-SIZING
//boxSizing
//box-sizing: border-box; tells the browser to account for any border and padding in the value you specify for width and height. If you set an element's width to 100 pixels, that 100 pixels will include any border or padding you added, and the content box will shrink to absorb that extra width. This typically makes it much easier to size elements.
// Some experts recommend that web developers should consider routinely applying box-sizing: border-box to all elements.
// from https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing
console.log('amazonMimic hit');
const amazonMimic = {
  // placeholder: 'value'
  // backgroundColor: "yellow",
  backgroundColor: "#37475a",
  fontFamily: "arial, sans-serif",
  reference: {
    // #232f3e or rgb(35, 47, 62) make the dark blue background color
    // #37475a or rgb(55, 71, 90) make the lighter dark blue color for "move to top" bar. has transparent-ish overlay when hovered
    // believe this is the white opacity on hover used for the back to top link =>
    // background-color:#000, opacity:.6
    // from #nav-cover{position:absolute;top:0;left:0;width:100%;height:100%;display:none;background-color:#000;-ms-filter:opacity(.6);filter:alpha(opacity=60);-webkit-opacity:.6;-moz-opacity:.6;-o-opacity:.6;opacity:.6;-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);-o-transform:translate3d(0,0,0);transform:translate3d(0,0,0);z-index:4}
    // from https://images-na.ssl-images-amazon.com/images/I/6111OnqDf2L._RC%7C01H--hw6CvL.css,31MxFbqyT5L.css,21fiFnLYxlL.css,31ZQTpsW1eL.css,01NHva6qGRL.css,31UlxNhlUML.css_.css?AUIClients/NavDesktopMetaAsset#desktop stylesheet
    // #febd69 or rgb(254, 189, 105) make the orange search button at top of page
    // white font is white. #ffffff or rgb(255, 255, 255)
    // link color is #0066c0 or rgb(0, 102, 192)
    // moused over link is #c45500 or rgb(196, 85, 0)
    // arrow on the amazon logo is #FF9900 or rgb(255, 153, 0)
  },
  headContainer: {
    width: "100%",
    background: "white",

  },
  header: {
    color: "#000000",//dark text color in amazon header. seems to lighten to #464646 at edges of text based on pixel color finder?
    button: {
      // padding: "auto",
      // width: "65%",
      // minWidth: "25px",
      // maxWidth: "80%",
      display: "block",
      verticalAlign: "middle",
      // margin-left: "5%"
      // margin: "10px auto", //"vertical horizontal"
      // margin: "auto 10%"
      // margin      : 0,
      padding     : "0",
      border      : "0",
      background  : "transparent",
      // font-family : inherit,
      // font-size   : 1em,
      cursor: "pointer"
    },
    buttonSpan: {
      background: "#4AB3F4", //twitter blue, button version
      display: "block",
      border: "rbga(0,0,0,0)",
      borderRadius: "100px",
      height: "calc(12px + 2.5vh)",
      color: "#FFFFFF",

      paddingTop: "1vh",
      paddingBottom: "1px",
      // margin: "1vh 0"
      // fontFamily: "Arial, sans-serif",
      // fontSize: "14px"
      // fontSize: "2.3vh"
      fontSize: "calc(7px + 1vh)" //see citationn for this approach in buttonSpan on twitterMimic
    },
  },
  actionsHeader: {
    padding: "1vh 0",
    backgroundColor: "#37475a",
    //links on dark background are white.
  },
  color: "white",
  lightLinkText: {
    color: "#dddddd", //non-moused over
  },
  darkLinkText: {
    color: "#0066c0", //non-moused over
  },
  bodyLayout: {
    top: "15%",
  }
}


module.exports = amazonMimic;
