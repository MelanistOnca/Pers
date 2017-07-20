import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';


export default class LayoutSelector extends React.Component {


  render(){
    console.log(this.props, 'was this.props in layoutSelector');

    // let linkLikeButtonStyles = {
    //   background:'grey',
    //   color:'inherit',
    //   border:'none' ,
    //   padding:'1px',
    //   // font: 'inherit',
    //   /*border is optional*/
    //   // borderBottom:'1px solid #444',
    //   cursor: 'pointer'
    // }
    // let linkLikeButtonStyles2 = {
    //   background:'grey',
    //   color:'inherit',
    //   border:'none' ,
    //   // padding:'1px',
    //   // font: 'inherit',
    //   /*border is optional*/
    //   // borderBottom:'1px solid #444',
    //   cursor: 'pointer'
    // }
    // <li><button id="tooMuchColor" style={linkLikeButtonStyles}>Too Much Color</button></li>
    // <li><button id="twitterMimic" style={linkLikeButtonStyles2}>Mimic Twitter</button></li>
    let layoutStyles = {
      display: "center",
      paddingLeft: '10vw',
      paddingRight: '10vw',
      // background: 'black',
      // opacity: .01
      background: "rgba(0, 0, 0, 0.1)"
    }
    let ulStyle = {
      marginTop: '1px',
      marginBottom: '1px'
    }
    let buttonStyle = {
      minWidth: "20vw"
    }
    //all this shit should be in state
    let buttonInfoCollection = {//all this shit should be in state
      tooMuchColor: {
        id: "tooMuchColor",
        style: {

        },
        label: "Too Much Color"
      },
      twitter: {
        id: "mimicTwitter",
        style: {

        },
        label: "Mimic Twitter"
      },
      facebook: {
        id: "mimicFacebook",
        style: {

        },
        label: "Mimic Facebook"
      },
      patreon: {
        id: "mimicPatreon",
        style: {

        },
        label: "Mimic Patreon"
      },
      amazon: {
        id: "mimicAmazon",
        style: {

        },
        label: "Mimic Amazon"
      }
    } //all this shit should be in state.


    return(
      <div id = "layoutSelectorContainer" style={layoutStyles}>
        <div>Select Visual Layout</div>
        <ul style={ulStyle} >
          <li><button id="tooMuchColor" onClick={this.props.changeLayout.bind(this)} >Too Much Color</button></li>
          <li><button id="twitterMimic" >Mimic Twitter</button></li>
          <li><button id="facebookMimic" >Mimic Facebook</button></li>
          <li><button id="patreonMimic" >Mimic Patreon</button></li>
          <li><button id="amazonMimic" >Mimic Amazon</button></li>
        </ul>

      </div>
    )
  }

}
