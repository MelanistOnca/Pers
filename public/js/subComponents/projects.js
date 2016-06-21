

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
              description="Here a simple dice game"
              />
          </li>
          <li>
            <Project
              name="booksCrud"
              link="www.google.com"
              title="Book Tracker/Finder"
              description="Here is a link to google rather than my book app"
              />
          </li>
          <li>
            <Project
              name="evolutionDemonstration"
              link="www.bing.com"
              title="Simple Demonstration of Evolution"
              description="Here is a link to bing rather than my evolution project"
              />
          </li>
          <li>
            <Project
              name="d3USTempData"
              link="www.yahoo.com"
              title="Temp Anomaly By Year"
              description="Here is a link to yahoo (what?) rather than the group D3/API project"
              />
          </li>
        </ul>
      </div>
    )
  }
}
