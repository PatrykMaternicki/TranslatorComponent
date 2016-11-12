import React from 'react';
import TextInput from './TextInput.js';
import FormButton from './FormButton.js';

export default class FormApp extends React.Component {
  constructor (){
    super();
    this.state = {
      result: "",
      error: "",
    };
  }

  translate (){
  console.log('Take click');
  var Controler = new (require('../../Controler/Controler.js'))(this.props.id);
  Controler.init();
  if (Controler.init()){
    this.setState({result : Controler.getResult()});
    this.setState({error: ''});
  }
  else {
    this.setState({result: ''});
    this.setState({error: Controler.getException()});
  }
  }
  render (){

  return (
    <div>
    <p>{this.state.error}</p>
    <form id={this.props.id}>
    Podaj system liczbowy : <TextInput type="text" name="inputSystemNumber" />
    <br />
    Podaj system liczbowy-wyjściowy: <TextInput type="text" name="outputSystemNumber" />
    <br />
    Podaj liczbe : <TextInput type="text" name="resultNumber" />
    <br />
    Oblicz : <FormButton type="button" id="submitButton" translate={this.translate.bind(this)} />
    </form>
    <p>{this.state.result}</p>
    </div>
  );

  }
}
