/*
Description: React Component. Service handle Event.
*/
import React from 'react';

export default class FormButton extends React.Component {
handleClick(){
  this.props.translate();
}

  render (){
    return (
    <input type={this.props.type} id={this.props.id} onClick={this.handleClick.bind(this)}/>
    );

  }
}
