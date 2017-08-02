import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';


import site_right_switch from './helpers/site_right_switch'
import site_left_switch from './helpers/site_left_switch'//for testing

export default class Right extends React.Component {


  render(){


    // <div id="rightContainer" style={site_left_switch(this.props)}>
    return(
      <div id="rightContainer" style={site_right_switch(this.props)}>
        


      </div>
    )
  }

}
