

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
    background: "linear-gradient(90deg, #42f4d7, #f7f76f)"
  }, //since these backgrounds are the same as the tooMuchColor.project_bg set I should see if there's a way to set it up as a variable or something that I can insert into .header and .project_bg. maybe with spread operator?
  left: {
    // background: "green"
  },
  linkText: {
    color: "pink",
  },
  bodyLayout: {

  }
}

module.exports = tooMuchColor
