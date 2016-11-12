import React from 'react';
import ReactDom from 'react-dom';
import Translator from './View/Translator.js'

/*
* Description: Main Class API.
*/

class App extends React.Component {

  render (){
    return (
      <Translator idForm={this.props.nameForm}/>
    );}
}

ReactDom.render(<App nameForm="formExample" />, document.getElementById('app'));
ReactDom.render(<App nameForm="formExmaple2"/>, document.getElementById('app2'));
