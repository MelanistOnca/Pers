

import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';

import site_projects_switch from '../helpers/site_projects_switch'

export default class Project extends React.Component {
  constructor(){
    super();
    this.state = {
      hovered: false
    }
  }
  hoverToggle(e){
    e.preventDefault()
    // console.log(this, 'was this in hoverToggle');
    // console.log(e, 'was e in hoverToggle');
    // console.log("onHover called");
    // console.log(e, 'was e in onHover');
    // console.log(e.target, 'was e.target in onHover');
    // console.log(e.target.style, 'was e.target.style in onHover');
    // console.log(style, 'was style in onHover');
    // console.log(this, 'was this in onHover');
    // e.target.style = style
    // console.log(e.target.style, 'was e.target.style in after e.target.style = style');
    this.setState({
      hovered: !this.state.hovered
    })


  } //may need to add state to this component so that the full name area can change styling based off of that. see
  // https://stackoverflow.com/a/33000431
  // for probable implementation

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
    let unHovered = this.props.layoutDetails[this.props.selectedLayout].unHoveredUsername
    let linkStyle = this.props.layoutDetails[this.props.selectedLayout].linkText
    let hoverStyle =
    this.state.hovered ? linkStyle : unHovered
    // let hoverStyle;
    // this.state.hovered ? hoverStyle=linkStyle : hoverStyle=unHovered
    let usernameStyle = this.props.layoutDetails[this.props.selectedLayout].usernameAtStyle //for improved readability below

    let titleMod = (this.props.selectedLayout === 'twitterMimic') ? `@${this.props.title}` : this.props.title
    // console.log(unHovered, 'was unHovered');
    let titleLine;
    // style={linkStyle}
    if(this.props.selectedLayout === 'twitterMimic') {
      titleLine = <h3><a
        style={hoverStyle}
        href={this.props.link}
        onMouseEnter={this.hoverToggle.bind(this)}
        onMouseLeave={this.hoverToggle.bind(this)}
        >{this.props.title}</a>
      <span style={usernameStyle}>{titleMod}</span></h3>
    } else {
      titleLine = <h3><a style={linkStyle} href={this.props.link}>{this.props.title}</a>
      </h3>
    }




// style={this.props.layoutDetails[this.props.selectedLayout]}
    return(
      <div id={`${this.props.name}ProjectContainer`}

        >
        <div className="projectStyleWrapper"
          style={site_projects_switch(this.props)}
          >
          <div className="projectImageContainer"
            style={this.props.layoutDetails[this.props.selectedLayout].imgContainer}
            >
            <a href={`${this.props.photoLink}` }>
              <img style={this.props.layoutDetails[this.props.selectedLayout].img} id={`${this.props.name}PreviewImage`  } src={imgSrc}
                />
            </a>


          </div>
          <div className="projectDescriptionContainer"
            >
            {titleLine}
            <p>{this.props.description}</p>
          </div>


        </div>

      </div>
    )
  }
}
