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


export default class App extends React.Component{
  // constructor(props){
  constructor(){
    // console.log(props, 'was props in constructor');
    // super(props);
    super();
    this.state = {
      selectedLayout : 'placeholder layout label',
      layoutOptions : ['tooMuchColor','twitterMimic','facebookMimic', 'patreonMimic', 'amazonMimic']
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
    console.log(e.target.id, 'was e.target.id');
    console.log(this.state, 'was this.state');
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
      <div id="siteContainer">
        {/*
          <Test
          />
          */}
        <Head
          selectedLayout={this.state.selectedLayout}
          layoutOptions={this.state.layoutOptions}
          changeLayout={this.changeLayout}
          />

        <Body
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
