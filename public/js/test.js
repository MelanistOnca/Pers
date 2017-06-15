import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';
// import d3 from 'd3';
const d3 = require('d3');

export default class Test extends React.Component {

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

    svg.append("rect") //need to get a better grip on what rect is here
        // .attr("className","background")
        .attr("width",width)
        .attr("height",height)
        // .attr("color", "#ff3333")
        .style("fill", "#ff3333")

        //gradient
        .attr("x1", "0%")
        .attr("y1", "0%")
        .attr("x2", "100%")
        .attr("y2", "0%");

        //colors
        //Set the color for the start (0%)
        linearGradient.append("stop") 
            .attr("offset", "0%")
            .attr("stop-color", "#ffa474"); //light blue

        //Set the color for the end (100%)
        linearGradient.append("stop")
            .attr("offset", "100%")
            .attr("stop-color", "#8b0000"); //dark blue


  }
  drawGradientAnimation(){




  }
  componentDidMount(){
    this.drawShape()
  }


  render(){



    return (
      <div id="testingGround">
        color gradient below
        <div id="colorGradientAnimationDiv"></div>

      </div>
    )
  }
}
