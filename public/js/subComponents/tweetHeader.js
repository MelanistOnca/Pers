import React from 'react';
import { render } from 'react-dom';

export default class TweetHeader extends React.Component {


  render(){
    // console.log(this.props, 'was this.props');
    // console.log(this.props.layoutDetails[this.props.selectedLayout], 'was this.props.layoutDetails[this.props.selectedLayout]');
    // console.log(this.props.layoutDetails[this.props.selectedLayout].tweetHeader, 'was this.props.layoutDetails[this.props.selectedLayout].tweetHeader');
    let placeholderStyle = {
      color: "yellow",
      background: "red",
      border: "1px solid black"
    }
    let tweetHeader;
    if(this.props.selectedLayout === "twitterMimic"){
      tweetHeader =
      <div id="tweetHeader"
        style={this.props.layoutDetails[this.props.selectedLayout].tweetHeader}
        >
        <div
          style={this.props.layoutDetails[this.props.selectedLayout].headImg}
          >
          <img src={"../../assets/icons/circle.svg"}/>
        </div>
        <div style={this.props.layoutDetails[this.props.selectedLayout].tweetHeaderText}
          title="This isn't an input field">
          Projects
        </div>

      </div>


    } else {
      tweetHeader = <div id="placeholderHeaderForTwitterMimic"></div>
    }
    return (
      <div>
        {tweetHeader}
      </div>

    )
  }
}
