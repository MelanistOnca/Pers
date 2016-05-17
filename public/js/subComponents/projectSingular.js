

import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';

export default class Project extends React.Component {


  render(){
    let idLabel = `${this.props.name}ProjectContainer`;
    console.log(idLabel, 'was idLabel');
    let link = this.props.link;
    console.log(link, 'was link');
    console.log(this.props.name, 'was this.props.name');
// the div id may be wonky
    return(
      <div id={`${this.props.name}ProjectContainer`}>
        <h3><a href={this.props.link}>{this.props.title}</a></h3>
        <p>{this.props.description}</p>
      </div>
    )
  }
}
