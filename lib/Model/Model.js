class Model {
  constructor (inputSystemNumber, outputSystemNumber, inputNumber){
    this.inputSystemNumber = inputSystemNumber;
    this.outputSystemNumber = outputSystemNumber;
    this.inputNumber = inputNumber.toLowerCase();
    this.resultNumber;
  }

getInputSystemNumber(){
  return this.inputSystemNumber;
}
getInputNumber (){
  return this.inputNumber;
}

getResultNumber(){
  return this.resultNumber;
}

getOutputSystemNumber (){
  return this.outputSystemNumber;
}

setResultNumber(value){
  this.resultNumber = value;
}

}
module.exports = Model;
