/*
Description: Component React.
*/
import React from 'react';

export default class TextInput extends React.Component {


  render (){
    return (
    <input type={this.props.type} id={this.props.name}  />
    );

  }
}
