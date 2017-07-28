

const tooMuchColor ={
  project_bg:  {
    background: "-webkit-linear-gradient(90deg, #42f4d7, #f7f76f)",
    background: "-moz-linear-gradient(90deg, #42f4d7, #f7f76f)",
    background: "linear-gradient(90deg, #42f4d7, #f7f76f)",
    // background: "transparent"
    // boxShadow: "0 0 1em rgba(0, 0, 0, 0.2)"
    // boxShadow: "inset 1vw 1vh 3em 3em rgba(0, 0, 0, 0.2)",
    boxShadow: "offset 1vw 1vh 3em 3em rgba(0, 0, 0, 0.2), inset 1vw 1vh 3em 3em rgba(255, 255, 255, 0.6)",
    borderRadius: "1vw"
  },
  site_bg: {
    // background: "radial-gradient(circle, #42f4d7, #7A7A7A)"
    background: "-webkit-radial-gradient(circle, #7A7A7A, #7A7A7A 30%, #42f4d7)",
    background: "-moz-radial-gradient(circle, #7A7A7A, #7A7A7A 30%, #42f4d7)",
    background: "radial-gradient(circle, #7A7A7A, #7A7A7A 30%, #42f4d7)",
    // margin: 0
    padding: 0
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
  }
}

module.exports = tooMuchColor