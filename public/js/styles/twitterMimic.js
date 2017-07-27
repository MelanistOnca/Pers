//localized styles in the elements themselves take precedence over inherited styles. May need to adjust what/how is locally styled for button-press restyling to work

//NOTE "bar" of grey towards bottom of page. seems to be the inherited backgroundColor from styles.css body styling. problem not present on tooMuchColor. will need to tinker to see why
const twitterMimic = {
  // placeholder: 'value'
  backgroundColor: "#e6ecf0",
  // border: "1px solid black",
  // borderTop: "1px rgb(230, 236, 240) solid",
  borderBottom: "1px rgb(230, 236, 240) solid",
  // marginTop: "1vh",
  // color: "green",
  // margin: "0",
  fontFamily: "'Arimo', sans-serif",
  linkText: {
    color: "#1DA1F2",
    // fontWeight: "bold"
    // fontSize: "calc( (15px + 2vh)/2vh)"
    // fontSize: "calc( 15px + 2vh)"
  },
  welcome: {
    background: "#1DA1F2",
    display: "block",
    // margin: "0",
    // padding: "0",
    listStyle: "none",

  },
  tweet: { //this styling probably should be renamed? or maybe what's returned in site_projects_switch
    color: "#14171a",
    atSymbolTextColor: "#657786",
    backgroundColor: "#ffffff",
    // portraitSize: "48px"
    //need to tinker with text size, and possibly have styling for the link such that it looks like the username line on a tweet.
    // width: "588px",
    width: "100%",
    // maxWidth: "60%"
    // marginTop: "1vh" //this needs to not be active for list to have no space. aka this probably needs to stay margin: "0"
    margin: "0",
    fontFamily: "Arial"
  },
  usernameAtStyle: {
    color: "#657786",
    // textDecoration: "unset"
    fontWeight: "100",
    fontSize: "2vh",
    marginTop: "5vh"
  },
  // innerText: {
  //   borderTop: "1px rgb(230, 236, 240) solid",
  //   borderBottom: "1px rgb(230, 236, 240) solid"
  // },
  bodyLayout: {
    display: "grid",
    gridTemplateColumns: "20% 1% 60% 19%"//for twitter spacing in-between first and second valuable columns (the 20/60 ones)
  },
  body: {//formerly listOfTweets
  // listOfTweets: {
    display: "block",
    // width: "590px",
    gridColumn: "3",
    // gridColumnStart: "2"
    // border: "1px red solid",
    // maxWidth: "60%"
    // position: "relative"
    maxWidth: "100%"


  },
  imgContainer: {
    // paddingTop: "10%"
    // display: "-webkit-inline",
    // display: "inline",
    // verticalAlign: "middle"
    // height: "100%"
  },
  img: { //this is for the portrait normally found on a posted tweet. i will likely have to differentiate this from other img-s on the page
    height: "48px",
    width: "48px",
    // display: "inline",
    // verticalAlign: "middle",
    paddingTop: "50%",
    // bottom: "0"
  },
  header: {
    color: "#14171a",
    backgroundColor: "#ffffff", //placeholder
    // height: "25%",
    // minHeight: "50px",
    // position: "static"
    width: "100%"
  },
  left: {
    position: "absolute",
    // top: "90px",
    // bottom: "0",
    left: "0",
    // width: "2vw"
    gridColumn: "1",
    backgroud: "green",
    // border: "1px black solid",
    // margin: "1px"
    width: "20%",
    height: "100%",
    maxWidth: "100%"

  },
  right: {
    position: "absolute",
    // top: "90px",
    right: "0",
    // width: "2vw"
    // display: "grid",
    // gridTemplateColumns: "1fr"
    gridColumn: "4",
    // border: "1px black solid",
    // width: "-20%",
    height: "100%",
    // textAlight: "left",
    maxWidth: "100%"
  },
  layoutSelectorContainer: {
  // layoutSelectorHeader: {
    fontSize:"2.5vh",
    // fontWeight:"bold",
    // textAlign: "-webkit-center",
    textAlign: "center",
    background: "#ffffff",
    marginRight: "1px",
    // height: "100%"
    paddingBottom: "3vh"
  },
  layoutSelectorUl: {
    display: "center",
    listStyle: "none",
    padding: "0",
    // verticalAlign: "middle"
    // color: "#1DA1F2" //twitter blue
  },
  button: {
    // padding: "auto",
    width: "65%",
    display: "block",
    verticalAlign: "middle",
    // margin-left: "5%"
    margin: "10px auto", //"vertical horizontal"
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
    height: "3.5vh",
    color: "#FFFFFF",
    paddingTop: "1vh",
    // margin: "1vh 0"
    fontFamily: "'Arimo', sans-serif",
    // fontSize: "14px"
    // fontSize: "2.3vh"
    fontSize: "calc(7px + 1vh)" //this is a neat as fuck solution to minimum responsive font sizing which I found at https://stackoverflow.com/a/39962030 . while it doesn't address maximum font size, you could maybe do something like calc( (7px+1vh)/1vh ) to slow the growth of the font size such that your target max might not be reachable on most devices. based on some quick testing with linkText above, this approach seems to work
  }
}


module.exports = twitterMimic;
