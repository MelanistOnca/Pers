

import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';
import Projects from './subComponents/projects';
import Articles from './subComponents/articles';
import Other from './subComponents/other';
import Left from './left';
import Right from './right';

import LayoutSelector from './subComponents/layoutSelector'

export default class Body extends React.Component {


  render(){

    // console.log(this.props, 'was this.props in body.js');
    // let stylePlaceholder = {
    //   // marginTop: "2vh",
    //   // position: "relative",
    //   // background: "green"
    //   display: "grid",
    //   // gridTemplateColumns: "1fr,3fr,1fr"
    //   // gridTemplateColumns: "1fr 3fr 1fr"
    //   // gridTemplateColumns: "20% 60% 20%"
    //   gridTemplateColumns: "20% 1% 60% 19%"//for twitter spacing in-between first and second valuable columns (the 20/60 ones)
    // }

    let initialSelect;
    //
    if(this.props.initialLayoutSelected===false){
      // console.log('was this.props.initialLayoutSelected===false');
      initialSelect =
      <div id="bodyContainer" style = {this.props.layoutDetails[this.props.selectedLayout].bodyLayout}>
        <LayoutSelector
          {...this.props}
          />
      </div>
    } else {
      // console.log('was else for this.props.initialLayoutSelected===false');
      initialSelect =
      <div id="bodyContainer" style = {this.props.layoutDetails[this.props.selectedLayout].bodyLayout}>
        <Left
          {...this.props}

          />
        <Projects
          {...this.props}
          />
        <Right
          {...this.props}
          />
        {/*<Articles
          />
        <Other
          />*/}
      </div>

    }
    // console.log('!!!!!!!!!!!!!!!!!');
    // let stylePreSelect = {
    //   position: "relative",
    //   marginTop: "20%",
    //   border: "1px black solid"
    // }
    // return(
    //   <div id="preSelection" style={stylePreSelect}>
    //     {initialSelect}
    //   </div>
    //
    // )
    return(
      <div id="bodyContainer" style = {this.props.layoutDetails[this.props.selectedLayout].bodyLayout}>
        <Left
          {...this.props}

          />
        <Projects
          {...this.props}
          />
        <Right
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
