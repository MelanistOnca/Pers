

import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';
import Head from './head';
import Body from './body';
import Foot from './foot';

export default class Site extends React.Component{

  render(){


    return(
      <div id="siteContainer">
        <Head
          />

        <Body
          />

        <Foot
          />
      </div>
    )
  }
}
