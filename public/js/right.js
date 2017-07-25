import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';


import site_right_switch from './helpers/site_right_switch'

export default class Right extends React.Component {


  render(){
    let textItem = 'sdg'

    return(
      <div id="rightContainer" style={site_right_switch(this.props)}>
        right container here
        {textItem}
      </div>
    )
  }

}
