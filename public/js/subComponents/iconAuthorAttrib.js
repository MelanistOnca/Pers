// Icon made by [author link] from www.flaticon.com
// [circle.svg] icon made by http://www.freepik.com/ from www.flaticon.com
// [interface.svg] icon made by https://smashicons.com/ from www.flaticon.com
import React from 'react';
import { render } from 'react-dom';

export default class IconAuthorAttrib extends React.Component{


  render(){
    // console.log(this.props, 'was this.props in iconAuthorAttrib');
    let iconStyle = {
      height: "12px",
      width: "12px"
    }
    let localTextSize = {
      fontSize: "calc(5px + .3vh)",
      paddingLeft: "1px"
    }
    let localBorder = {
      borderBottom: "1px solid rgb(230, 236, 240)"
    }

    return(
      <div className="iconAuthorAttrib">
        <div >
            this <a href={this.props.iconAuthorLink}><img src={this.props.iconImg}  style={iconStyle}/></a> icon made by <a href={this.props.iconAuthorLink}>
            {this.props.iconAuthorLink}</a>
        </div>
      </div>
    )
  }
}
