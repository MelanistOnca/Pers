

const tooMuchColor ={
  color: "rgb(120, 0, 140)",
  background: "-webkit-radial-gradient(circle, #7A7A7A, #7A7A7A 30%, #42f4d7)",
  background: "-moz-radial-gradient(circle, #7A7A7A, #7A7A7A 30%, #42f4d7)",
  background: "radial-gradient(circle, #7A7A7A, #7A7A7A 30%, #42f4d7)",
  // height: "100%",

  // margin: 0
  padding: 0,
  project_bg:  {
    background: "-webkit-linear-gradient(90deg, #42f4d7, #f7f76f)",
    background: "-moz-linear-gradient(90deg, #42f4d7, #f7f76f)",
    background: "linear-gradient(90deg, #42f4d7, #f7f76f)",
    // background: "-webkit-linear-gradient(90deg, rgb(66, 244, 215, .5), #rgb(247, 247, 111, .5))",
    // background: "-webkit-linear-gradient(90deg, rgb(66, 244, 215, .2) 80%, rgb(247, 247, 111, .5))",
    // background: "-moz-linear-gradient(90deg, rgb(66, 244, 215, .5), rgb(247, 247, 111, .5))",
    // background: "linear-gradient(90deg, rgb(66, 244, 215, .5), rgb(247, 247, 111, .5))",
    // background: "transparent"
    // boxShadow: "0 0 1em rgba(0, 0, 0, 0.2)"
    // boxShadow: "inset 1vw 1vh 3em 3em rgba(0, 0, 0, 0.2)",
    boxShadow: "offset 1vw 1vh 3em 3em rgba(0, 0, 0, 0.2), inset 1vw 1vh 3em 3em rgba(255, 255, 255, 0.6)",
    borderRadius: "1vw",
    margin: "3px",
    width: "60%",
    marginLeft: "25%"
  },
  site_bg: {
    // background: "radial-gradient(circle, #42f4d7, #7A7A7A)"
    background: "-webkit-radial-gradient(circle, #7A7A7A, #7A7A7A 30%, #42f4d7)",
    background: "-moz-radial-gradient(circle, #7A7A7A, #7A7A7A 30%, #42f4d7)",
    background: "radial-gradient(circle, #7A7A7A, #7A7A7A 30%, #42f4d7)",
    // margin: 0
    padding: 0,
    // backgroundRepeat: "repeat-x",
    // height: "100%"
  },
  img: {
    borderRadius: "1vw"
  },
  header: {
    background: "-webkit-linear-gradient(90deg, #42f4d7, #f7f76f)",
    background: "-moz-linear-gradient(90deg, #42f4d7, #f7f76f)",
    background: "linear-gradient(90deg, #42f4d7, #f7f76f)",
    width: "100%"
  }, //since these backgrounds are the same as the tooMuchColor.project_bg set I should see if there's a way to set it up as a variable or something that I can insert into .header and .project_bg. maybe with spread operator?
  left: {
    // background: "green"
  },
  linkText: {
    // color: "pink",
    // color: "rgb(255, 192, 203)", //pink
    // color: "rgb(255, 192, 203, .05)", //pink //opacity values don't work for text color
    color: "rgb(233, 113, 133)" //a different pink
  },
  bodyLayout: {
    marginTop: "3vh",
    top: "20%"
    // width: "100%",
    // height: "100%"

  },
  layoutSelectorContainer: {
    background: "rgba(0, 0, 0, 0.1)"
  },
  splash: {
    // color: "rgb(255, 174, 35)" //an orange
    // color: "rgb(255, 174, 35, .5)"
    // background: "rgb(255, 174, 35, .5)"
    // color: "rgb(255, 210, 135)" //a different orange
    // color: "rgb(188, 125, 20)"//a third orange //ends up looking brown. orange ain't gonna work sweety.
    color: "rgb(233, 113, 133)"
  },
  button: { //probably need this and buttonSpan to make the buttons show up properly on mobile mode
    // background: "rgb(192, 192, 192)",
    // borderBottom: "none", //switches to "outset" for mobile version of browser
    // border: "0px solid black",
    // borderRadius: "50%"

    background: "white",
    border: "0",
    borderRadius: "4px"
    //getting things like :active or :hover to work with react styling requires other modules, so we're ignoring it for now

  },
  buttonSpan: {
    margin: "1vh 1vw"
  }
}

module.exports = tooMuchColor
