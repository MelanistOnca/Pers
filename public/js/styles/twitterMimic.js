//localized styles in the elements themselves take precedence over inherited styles. May need to adjust what/how is locally styled for button-press restyling to work

//NOTE "bar" of grey towards bottom of page. seems to be the inherited backgroundColor from styles.css body styling. problem not present on tooMuchColor. will need to tinker to see why
const twitterMimic = {
  // placeholder: 'value'
  backgroundColor: "#e6ecf0",
  // color: "green",
  tweet: {
    color: "#14171a",
    atSymbolTextColor: "#657786",
    backgroundColor: "#ffffff",
    // portraitSize: "48px"
    //need to tinker with text size, and possibly have styling for the link such that it looks like the username line on a tweet.
  },
  body: {//formerly listOfTweets
  // listOfTweets: {
    display: "block",
    width: "590px",
    gridColumn: "2/5"
  },
  img: { //this is for the portrait normally found on a posted tweet. i will likely have to differentiate this from other img-s on the page
    height: "48px",
    width: "48px"
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
    top: "90px",
    // bottom: "0",
    left: "0",
    // width: "2vw"
    gridColumn: "1/5"

  },
  right: {
    position: "absolute",
    top: "90px",
    right: "0",
    // width: "2vw"
    // display: "grid",
    // gridTemplateColumns: "1fr"
    gridColumn: "4/5"
  }
}


module.exports = twitterMimic;
