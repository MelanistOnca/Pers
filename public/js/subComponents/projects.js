

import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';
import Project from './projectSingular'

export default class Projects extends React.Component {


  render(){

    let bgStyles = {
      // background: "radial-gradient(circle, #42f4d7, #7A7A7A)"
      background: "-webkit-radial-gradient(circle, #7A7A7A, #7A7A7A 30%, #42f4d7)",
      background: "-moz-radial-gradient(circle, #7A7A7A, #7A7A7A 30%, #42f4d7)",
      background: "radial-gradient(circle, #7A7A7A, #7A7A7A 30%, #42f4d7)"
    }
    let bufferStyle = {
      margin: "2vh"
    }

    return(
      <div id="projectLinkContainer"
        style={bgStyles}
        >
        <ul>
          <li>
            <Project
              name="bookList"
              link="https://floating-temple-72567.herokuapp.com/"
              title="Book List app"
              description="CRUD app that allows you to search a 3rd party API for books. Includes user auth. Uses React, React-redux, PGP, Express, Node, and more. Hosted via Heroku, first load may take additional time."
              photoLink="https://unsplash.com/photos/9BoqXzEeQqM"
              />
            {/* use this photo "https://unsplash.com/photos/9BoqXzEeQqM" with maybe this badge https://unsplash.com/photos/9BoqXzEeQqM?modal=credit-badge */}
          </li>
          <li>
            <Project
              name="diceGame"
              link="https://fast-bayou-12268.herokuapp.com/"
              title="Dice Game"
              description="Here is a simple dice game"
              photoLink="https://unsplash.com/search/photos/dice?photo=kLMkSuriEwk"
              />
            {/* use this photo https://unsplash.com/search/photos/dice?photo=kLMkSuriEwk with maybe this credit badge https://unsplash.com/search/photos/dice?modal=credit-badge&photo=kLMkSuriEwk */}
          </li>
          <li>
            <Project
              name="menuApp"
              link="#"
              title="Menu App"
              description="RoR menu app. Under development. Image is placeholder"
              photoLink="https:////i.imgur.com/ARwY0GWr.jpg"
              />
            {/* find photos */}
          </li>
          {/*
          <li>
            <Project
              name="booksCrud"
              link="https://www.google.com"
              title="Book Tracker/Finder"
              description="Here is a link to google rather than my book app"
              />
          </li>
          <li>
            <Project
              name="evolutionDemonstration"
              link="https://www.bing.com"
              title="Simple Demonstration of Evolution"
              description="Here is a link to bing rather than my evolution project"
              />
          </li>
          <li>
            <Project
              name="d3USTempData"
              link="https://www.yahoo.com"
              title="Temp Anomaly By Year"
              description="Here is a link to yahoo (what?) rather than the group D3/API project"
              />
          </li> */}
        </ul>
      </div>
    )
  }
}
