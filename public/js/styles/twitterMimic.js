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
  linkText: {
    color: "#1DA1F2",
    fontWeight: "bold"
  },
  welcome: {
    background: "#1DA1F2",
    display: "block",
    // margin: "0",
    // padding: "0",
    listStyle: "none",

  },
  tweet: {
    color: "#14171a",
    atSymbolTextColor: "#657786",
    backgroundColor: "#ffffff",
    // portraitSize: "48px"
    //need to tinker with text size, and possibly have styling for the link such that it looks like the username line on a tweet.
    // width: "588px",
    width: "100%",
    // maxWidth: "60%"
    // marginTop: "1vh" //this needs to not be active for list to have no space. aka this probably needs to stay margin: "0"
  },
  // innerText: {
  //   borderTop: "1px rgb(230, 236, 240) solid",
  //   borderBottom: "1px rgb(230, 236, 240) solid"
  // },
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
    legnth: "100%",
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
    fontSize:"2.5vh", fontWeight:"bold",
    // textAlign: "-webkit-center",
    textAlign: "center",
    background: "#ffffff",
    marginRight: "1px"
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
    width: "60%",
    display: "block",
    verticalAlign: "middle",
    // margin-left: "5%"
    margin: "0 auto" //"vertical horizontal"
    // margin: "auto 10%"
  }
}


module.exports = twitterMimic;
