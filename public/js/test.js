import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';
// import d3 from 'd3';
const d3 = require('d3');

export default class Test extends React.Component {
  copyPastaOfAnimatedGradientExample(){
    //this is not copyPasta
    let svg = d3.select("#colorGradientAnimationDiv").append("svg")
    //the below is
    //Append a defs (for definition) element to your SVG
    var defs = svg.append("defs");

    //Append a linearGradient element to the defs and give it a unique id
    var linearGradient = defs.append("linearGradient")
        .attr("id", "linear-gradient");
    //Horizontal gradient
    linearGradient
        .attr("x1", "0%")
        .attr("y1", "0%")
        .attr("x2", "100%")
        .attr("y2", "0%");

    //Set the color for the start (0%)
    linearGradient.append("stop")
        .attr("offset", "0%")
        .attr("stop-color", "#ffa474"); //light blue

    //Set the color for the end (100%)
    linearGradient.append("stop")
        .attr("offset", "100%")
        .attr("stop-color", "#8b0000"); //dark blue

    //Draw the rectangle and fill with gradient
    svg.append("rect")
    	.attr("width", 300)
    	.attr("height", 20)
    	.style("fill", "url(#linear-gradient)");





  }
  drawShape(){
    //defining size
    let width = 100,
        height = 150
        ;

    //appending svg to the element id, and setting attributes
    let svg = d3.select("#colorGradientAnimationDiv").append("svg")
    .attr("width",width)
    .attr("height",height)
    .attr("viewBox", "0 0 100 150")

    let defs = svg.append("defs")
    //Append a linearGradient element to the defs and give it a unique id
    var linearGradient = defs.append("linearGradient")
        .attr("id", "lin-grad");
    //Horizontal gradient
    linearGradient
        // .attr("x1", "0%")
        .attr("x1", "100%")
        .attr("y1", "0%")
        // .attr("x2", "100%")
        .attr("x2", "0%")
        .attr("y2", "0%");
        //Set the color for the start (0%)
        linearGradient.append("stop")
            .attr("offset", "0%")
            .attr("stop-color", "#7A7A7A"); //light blue

        //Set the color for the end (100%)
        linearGradient.append("stop")
            .attr("offset", "100%")
            .attr("stop-color", "#FBA81A"); //dark blue

    svg.append("rect") //need to get a better grip on what rect is here
        // .attr("className","background")
        .attr("width",width)
        .attr("height",height)
        // .attr("color", "#ff3333")
        // .style("fill", "#ff3333")
        .style("fill", "url(#lin-grad)");

        //gradient
        // .attr("x1", "0%")
        // .attr("y1", "0%")
        // .attr("x2", "100%")
        // .attr("y2", "0%");

        //colors //not working as i expect it to. probably because "linearGradient" in the example is different from how i have svg defined?
        // //Set the color for the start (0%)
        // .append("stop")
        //     .attr("offset", "0%")
        //     .attr("stop-color", "#ffa474"); //light blue
        //
        // //Set the color for the end (100%)
        // .append("stop")
        //     .attr("offset", "100%")
        //     .attr("stop-color", "#8b0000"); //dark blue


  }
  englishSummaryOfStepsForGradient(){

    // define a variable as such:
    // let firstVariable = d3.select("elementID") then .append("svg")
    //
    // then define another variable with
    // let secondVariable = firstVariable.append("defs")
    // a defs element is for definitions, may be peculiar to svg objects?
    //
    // give the definitions a gradient to a third variable
    // let thirdVariable = secondVariable.append("linearGradient")
    // //give it an id of linear-gradient, i don't know if this term is changeable?
    //   .attr("id","linear-gradient")
    //
    // //define the type of gradient you want
    // thirdVariable
    //   .attr("x1", "0%")
    //   .attr("y1", "0%")
    //   .attr("x2", "100%")
    //   .attr("y2", "0%");
    //   //this set of xs and ys is a horizontal gradient
    //
    // //append the points you want the gradient to move between by adding stops to the thirdVariable
    // thirdVariable.append("stop")
    //     .attr("offset", "0%") //0% here is start element
    //     .attr("stop-color", "#ffa474"); //light blue //color of 'stop' at the above point (0%)
    //
    //
    // thirdVariable.append("stop")
    //     .attr("offset", "100%") //100% here is end of element
    //     .attr("stop-color", "#8b0000"); //dark blue //color of 'stop' at the above point (100%)
    //
    // //THEN draw the shape
    // firstVariable.append("rect")//because we're using a rectangular shape, see what other options there are
    //   .attr("width, 250")
    //   .attr("height, 350")
    //   //color/fill the rect with the definitions provided by the element declared in thirdVariable definition with .attr("id","#blank") (i think, in this example #blank is #linear-gradient )
    //
  }
  drawGradientAnimation(){




  }
  componentDidMount(){
    this.drawShape()
    // this.copyPastaOfAnimatedGradientExample()
  }


  render(){

    let backgroundLink = {
      background_image: 'url("../assets/images/test.svg")'
      // backgroundImage: "url('../assets/images/hugues-adamo-198006_300x200.jpeg')"
    }
    // public/js/test.js
    // public/assets/images/test.svg
    return (
      <div id="testingGround">
        <div>
          color gradient below
          <div id="colorGradientAnimationDiv"></div>
        </div>
        <div id="svgBackground" style={backgroundLink}>
          svg image link for background here
        </div>


      </div>
    )
  }
}
