

import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';
import Projects from './subComponents/projects';
import Articles from './subComponents/articles';
import Other from './subComponents/other';

export default class Body extends React.Component {


  render(){

    // console.log(this.props, 'was this.props in body.js');
    return(
      <div id="bodyContainer">
        <Projects
          {...this.props}
          />
        {/*<Articles
          />
        <Other
          />*/}
      </div>
    )
  }
}
