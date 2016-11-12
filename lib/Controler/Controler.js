/*
Main Controler. Comunicate other Controlers,View and Model.
*/
class Controler {
  constructor (idForm){
  this.id = idForm;
  this.Digit;
  this.charListInputSystem = "";
  this.result = "";

}

init (){

  this.generateDigit();
  var GenCharControler = new (require ('./GenCharControler.js'))(this.Digit);
  GenCharControler.init();
  var ValidatorControler = new (require ('./ValidatorControler.js'))(
    this.Digit,
    GenCharControler.getCharListInputSystem()
  );

  if (!ValidatorControler.init()){
    this.exception = ValidatorControler.getException();
    return false;
  }
  var TransferControler = new (require ('./TransferControler.js'))(
    this.Digit,
  );
  TransferControler.init();
  this.setResult(TransferControler.getScore());
  return true;
}

getResult (){
  return Digit.getResultNumber();
}

generateDigit(){
this.setNumber(document.getElementById(this.id));
}

setNumber(HTMLSelector){
    this.Digit = new (require('../Model/Model.js'))(
    Number.parseInt(HTMLSelector.inputSystemNumber.value),
    Number.parseInt(HTMLSelector.outputSystemNumber.value),
    HTMLSelector.resultNumber.value
  );
}

setCharListInputSystem (value){
  this.charListInputSystem
}

setResult (result){
  this.result = result;
}
getResult (){
  return this.result;
}

getException (){
  return this.exception;
}

}
module.exports = Controler;
