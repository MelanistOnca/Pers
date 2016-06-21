

import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';


export default class Article extends React.Component{


  render(){


    return(
      <div id="articleLinkContainer">
        <p>i think i like this as a vertical list</p>
        <ul>
          <li><a href="">lists of articles that i've written/contributed to.</a></li>
          <li><a href=""> another article</a></li>
        </ul>
      </div>
    )
  }
}
