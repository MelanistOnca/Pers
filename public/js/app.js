// 'use strict';

// const React = require('react');
// const ReactDOM = require('react-dom');
// const $ = require('jquery');

import React from 'react';
import { render, ReactDOMServer } from 'react-dom';

import $ from 'jquery';

// import Test from './test2';

import Head from './head';
import Body from './body';
import Foot from './foot';

import tooMuchColor from './styles/tooMuchColor'
import twitterMimic from './styles/twitterMimic'
import facebookMimic from './styles/facebookMimic'
import patreonMimic from './styles/patreonMimic'
import amazonMimic from './styles/amazonMimic'

import site_bg_switch from './helpers/site_bg_switch'

// console.log(twitterMimic, 'was twitterMimic in app.js');

export default class App extends React.Component{
  // constructor(props){
  constructor(){
    // console.log(props, 'was props in constructor');
    // super(props);
    super();
    this.state = {
      selectedLayout : 'twitterMimic',
      layoutOptions : [
        ['tooMuchColor','Too Much Color'], ['twitterMimic', 'Mimic Twitter'], ['facebookMimic','Mimic Facebook'], ['patreonMimic','Mimic Patreon'], ['amazonMimic','Mimic Amazon']
      ], //this may be redundant if i can just refer to the keys in layoutDetails //now that i've paired the key with the 'human readable' version, probably not redundant anymore?
      layoutDetails: {
        twitterMimic,
        tooMuchColor,
        facebookMimic,
        patreonMimic,
        amazonMimic
      }
    }
    //if a this needs to be bound for a function that I later write here, i would need to include the following:
    // this.functionName = this.functionName.bind(this)
    // so that the this used therein recognizes its the 'this' from here
    this.changeLayout = this.changeLayout.bind(this)

  }
  changeLayout(e){
    e.preventDefault()
    // console.log(e, 'was e');
    // console.log(e.target, 'was e.target');
    // console.log(e.target.id, 'was e.target.id');
    // console.log(this.state, 'was this.state');
    console.log(this.state.selectedLayout, 'was this.state.selectedLayout');
    // this.state.selectedLayout = e.target.id
    this.setState({
      selectedLayout: e.target.id
    })
    console.log(this.state.selectedLayout, 'was this.state.selectedLayout after set');
  }
  // getDefaultProps() {
	// 	console.log(this.props); //note this logs undefined
	// 	return this.state
	// }
  // static defaultProps = this.state




  render(){
    // console.log(this.props, 'was this.props in App');
    // console.log(this.state, 'was this.state in App');
    // let placeholder = this.state



    return(
      <div id="siteContainer"
        style= {site_bg_switch(this.state)}
        >
        {/*
          <Test
          />
          */}
        <Head
          {...this.state}
          changeLayout={this.changeLayout}
          />
        <Body
          {...this.state}
          changeLayout={this.changeLayout}
          />

        <Foot
          
          />
      </div>
    )
  }
  // AddAddressComponent.defaultProps = {
  //   selectedLayout : this.state.selectedLayout,
  //   layoutOptions : this.state.layoutOptions
  // };

  // AddAddressComponent.propTypes = {
  //   userInfo: React.PropTypes.object,
  //   cityList: PropTypes.array.isRequired,
  //   provinceList: PropTypes.array.isRequired,
  // }

}

render(
  (
    <App

      />
  ),
  // $('#container')
  document.getElementById('container')

)
// console.log('app.js loaded');
