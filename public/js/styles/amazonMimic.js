//NOTE NOTE NOTE the thing where you can 'scroll' through left/right like on amazon is i believe called a carousel

//localized styles in the elements themselves take precedence over inherited styles. May need to adjust what/how is locally styled for button-press restyling to work
console.log('amazonMimic hit');
const amazonMimic = {
  // placeholder: 'value'
  // backgroundColor: "yellow",
  backgroundColor: "#37475a",
  reference: {
    // #37475a or rgb(55, 71, 90) make the dark blue background color
    // #febd69 or rgb(254, 189, 105) make the orange search button at top of page
    // white font is white. #ffffff or rgb(255, 255, 255)
    // link color is #0066c0 or rgb(0, 102, 192)
    // moused over link is #c45500 or rgb(196, 85, 0)
    // arrow on the amazon logo is #FF9900 or rgb(255, 153, 0)
  },
  color: "white",
  linkText: {
    color: "#0066c0", //non-moused over
  },
  bodyLayout: {

  }
}


module.exports = amazonMimic;
