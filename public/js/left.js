import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';

import LayoutSelector from './subComponents/layoutSelector'

import site_left_switch from './helpers/site_left_switch'

export default class Left extends React.Component {


  render(){
    // console.log(this.props, 'was this.props in left.js');
    let hotSwap = <div></div>
    if(this.props.selectedLayout === 'twitterMimic'){
      hotSwap = <LayoutSelector {...this.props} />
    }
    return(
      <div id="leftContainer"
        style={site_left_switch(this.props)}
        >
        {hotSwap}
      </div>
    )
  }

}
