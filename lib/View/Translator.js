import React from 'react';
import FormApp from './Components/FormApp.js';
/*
Description: Main in class "View"
*/


export default class Translator extends React.Component {
  constructor (){
    super ();
  }


render (){
return (
  <div>
  <FormApp id={this.props.idForm} />
  </div>
);}

}
