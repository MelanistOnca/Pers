

import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';
import Project from './projectSingular'

export default class Projects extends React.Component {


  render(){


    return(
      <div id="projectLinkContainer">
        <ul>
          <li>
            <Project
              name="diceGame"
              link="https://fast-bayou-12268.herokuapp.com/"
              title="Dice Game"
              description="Here is a simple dice game"
              />
          </li>
          <li>
            <Project
              name="bookList"
              link="hhttps://floating-temple-72567.herokuapp.com/"
              title="Book List app"
              description="CRUD app that allows you to search a 3rd party API for books. Includes user auth. Uses React, React-redux, PGP, Express, Node, and more. Hosted via Heroku, first load may take additional time."
              />
          </li>{/*
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
