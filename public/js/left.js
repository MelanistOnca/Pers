import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';

import Foot from './foot';

import LayoutSelector from './subComponents/layoutSelector'

import site_left_switch from './helpers/site_left_switch'

export default class Left extends React.Component {


  render(){
    // console.log(this.props, 'was this.props in left.js');
    let hotSwap = <div></div>
    if(this.props.selectedLayout === 'twitterMimic'){
      hotSwap =
      <div>
        <LayoutSelector {...this.props} />
        <Foot {...this.props} />
      </div>

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
