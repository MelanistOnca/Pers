

import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';
import Projects from './subComponents/projects';
import Articles from './subComponents/articles';
import Other from './subComponents/other';

export default class Body extends React.Component {


  render(){


    return(
      <div id="bodyContainer">
        <Projects
          />
        <Articles
          />
        <Other
          />
      </div>
    )
  }
}
