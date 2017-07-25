

import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';

import site_projects_switch from '../helpers/site_projects_switch'

export default class Project extends React.Component {


  render(){
    // let idLabel = `${this.props.name}ProjectContainer`;
    // console.log(idLabel, 'was idLabel');
    // let link = this.props.link;
    // console.log(link, 'was link');
    // console.log(this.props.name, 'was this.props.name');
    //
    // let bgStyleTealYellow = {
    //   background: "-webkit-linear-gradient(90deg, #42f4d7, #f7f76f)",
    //   background: "-moz-linear-gradient(90deg, #42f4d7, #f7f76f)",
    //   background: "linear-gradient(90deg, #42f4d7, #f7f76f)"
    //   // background: "transparent"
    // }
    //
    // let bgGrey = {
    //   background: "grey"
    // }
    let imgSrc = '';
    switch (this.props.name) {
      case "bookList":
        imgSrc = '../assets/images/tom_hermans_264015_300x200.jpeg'
        // imgSrc = '../assets/images/tom-hermans-264015.jpg'
        break;
      case "diceGame":
        imgSrc = '../assets/images/hugues-adamo-198006_300x200.jpeg'
        break;
      case "menuApp":
        imgSrc = '../assets/images/hugues-adamo-198006_300x200.jpeg'
      default:


    }
    // console.log(imgSrc, 'was imgSrc');
    // console.log(this.props, 'was this.props in projectSingular');
// the div id may be wonky
// style={this.props.layoutDetails[this.props.selectedLayout].project_bg}

//NOTE TODO i likely need to refactor what the img style refers to with a switch NOTE NOTE
//NOTE i will also want to style the <h3>/<a> in projectDescriptionContainer to look like the twitter username line
    return(
      <div id={`${this.props.name}ProjectContainer`}>
        <div className="projectStyleWrapper"
          style={site_projects_switch(this.props)}
          >
          <div className="projectImageContainer"
            style={ {paddingTop: "1px"}  }
            >
            <a href={`${this.props.photoLink}` }>
              <img style={this.props.layoutDetails[this.props.selectedLayout].img} id={`${this.props.name}PreviewImage`  } src={imgSrc}
                />
            </a>


          </div>
          <div className="projectDescriptionContainer"
            >
            <h3><a href={this.props.link}>{this.props.title}</a></h3>
            <p>{this.props.description}</p>
          </div>


        </div>

      </div>
    )
  }
}
