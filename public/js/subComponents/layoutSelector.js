import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';


export default class LayoutSelector extends React.Component {


  render(){
    console.log(this.props, 'was this.props in layoutSelector');
    if(this.props.selectedLayout === 'twitterMimic') console.log('I may want to make the layout select buttons move to the left sidebar');

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
    let localLayoutStyles = {}
    if(this.props.selectedLayout === 'tooMuchColor'){
      localLayoutStyles = {
        display: "center",
        paddingLeft: '10vw',
        paddingRight: '10vw',
        // background: 'black',
        // opacity: .01
        background: "rgba(0, 0, 0, 0.1)"
      }
    }

    let ulStyle = {
      marginTop: '1px',
      marginBottom: '1px'
    }
    let buttonStyle = {
      minWidth: "20vw"
    }
    //all this shit should be in state

    // let selectionArray = [
    //
    // ]
    // layoutOptions : [
    //   [ ['tooMuchColor','Too Much Color'], ['twitterMimic', 'Mimic Twitter'], ['facebookMimic','Mimic Facebook'], ['patreonMimic','Mimic Patreon'], ['amazonMimic','Mimic Amazon'] ]
    // ]

    let buttonGen = []
    // if(this.props.selectedLayout !== "twitterMimic"){
      buttonGen = this.props.layoutOptions.map( (el) => {
        // console.log(el, 'was el');
        // let derivedButton =
        let liKey = `${el[0]}ListThatContainsButton`
        // buttonGen.push(
        return (
          <li key={liKey}>
           <button id={el[0]} onClick={this.props.changeLayout.bind(this)}>{el[1]}</button>
          </li>
        )
        // console.log(buttonGen, 'was buttonGen in map');

        // return derivedButton
      })
    // } //end of if

    // console.log(this.props.layoutOptions, 'was layoutOptions');
    // let buttonGen = []
    // let buttonGen = this.props.layoutOptions.map( (el) => {

    // console.log(buttonGen, 'was buttonGen');


    return (
      <div id={"layoutSelectorContainer"} style={localLayoutStyles}>
        <div>Select A Visual Layout</div>
        <ul style={ulStyle}>
          {buttonGen}
        </ul>
      </div>
    )
  }

}
