/*
* Generate Accept CharList;
*/
class genCharControler {
  constructor (Digit){
    this.Digit = Digit;
    this.AcceptCharList = '0123456789abcdef';
    this.inputSystemCharList = new Array ();
    this.outputSystemCharList = new Array();

  }

  init (){
  this.generateInputCharList();
  this.generateOutputCharList();
}

generateInputCharList (){
    if (this.Digit.getInputSystemNumber() > 9){
        this.setCharListInputSystem(this.AcceptCharList.substring(0,10));
        this.setCharListInputSystem(this.AcceptCharList.substring(10,this.Digit.getInputSystemNumber()));
        return;
    }
  this.setCharListInputSystem(this.AcceptCharList.substring(0,this.Digit.getInputSystemNumber()));
  this.setCharListInputSystem(this.AcceptCharList.substring(0,0));


  }


generateOutputCharList (){
  if (this.Digit.getInputSystemNumber() > 9){
      this.setCharListOutputSystem(this.AcceptCharList.substring(0,10));
      this.setCharListOutputSystem(this.AcceptCharList.substring(10,this.Digit.getInputSystemNumber()));
      return;
  }
  else{
  this.setCharListOutputSystem(this.AcceptCharList.substring(0,this.Digit.getOutputSystemNumber()));
  this.setCharListOutputSystem(this.AcceptCharList.substring(0,0));
}
}


setCharListOutputSystem(value){
this.outputSystemCharList.push(value);
}

getCharListOutputSystem (){
  return this.outputSystemNumber;
}

setCharListInputSystem(value){
  this.inputSystemCharList.push(value);
}

getCharListInputSystem (){
  return this.inputSystemCharList;
}
}
module.exports = genCharControler;
