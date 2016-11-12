/*
Description: Validate Input Data
*/

class ValidatorControler {
constructor (Digit, acceptCharList){
  this.Digit = Digit;
  this.acceptCharList = [
    {charNumList :  acceptCharList[0] },
    {charLetterList : acceptCharList[1] }
  ];
  this.exception = "";
}

init (){

  if (this.isEmpty()){
    this.setException('Pola nie mogą być puste');
    return false;
  }
  if (!this.isNum ()){
      return false;
    }
    if (this.isMoreAn16(this.Digit.getInputSystemNumber())){
      this.setException('Podany system liczbowy wejściowy jest za wysoki');
      return false;
    }
    if (this.isMoreAn16(this.Digit.getOutputSystemNumber())){
      this.setException('Podany system liczbowy wyjściowy jest za wysoki');
      return false;
    }
  if (!this.isCorectInputNumber()){
      this.setException('Liczba musi się zgadzać z zrodlowym system liczbowym');
      return false;
  }
  return true;

}

isEmpty (){

if (Number.isNaN(this.Digit.getInputSystemNumber()) || Number.isNaN(this.Digit.getOutputSystemNumber()) || this.Digit.getInputNumber().replace(/\s/g,"")  == "" ){
  return true;
}
return false;
}

isNum(){
  if (Number.isNaN(this.Digit.getInputSystemNumber())){
    this.setException('Wejściowy system liczbowy musi być podany jako liczba');
    return false;
  }
  if (Number.isNaN(this.Digit.getOutputSystemNumber())){
    this.setException('Wejściowy system liczbowy musi być podany jako liczba');
    return false;
  }
  return true;
}

isMoreAn16 (value){
  if(value > 16)return true; return false;
}

isCorectInputNumber (){
  var regex = this.constructRegex();
  var inputNumberString = this.Digit.getInputNumber();
  if (regex.test(inputNumberString)){
    return true;
  }
  else{
    return false;
  }
}

constructRegex (){
  if (this.isNull(this.acceptCharList[1].charLetterList)){
    return new RegExp(
      "(["
      + this.getFirstCharNum() + "-" + this.getLastCharNum()
      + "])"
    );
  }
  else{
  return new RegExp(
    "(^["
    + this.getFirstCharLetter() + "-" + this.getLastCharLetter()
    + this.getFirstCharNum() + "-" + this.getLastCharNum()
    +"]+$"
    + ")"
  );
  }
}

getFirstCharLetter (){
  return this.acceptCharList[1].charLetterList[0]
}

getFirstCharNum (){
  return this.acceptCharList[0].charNumList[0];
}

getLastCharNum (){
  return this.acceptCharList[0].charNumList[this.acceptCharList[0].charNumList.length-1];
}

getLastCharLetter (){
  return this.acceptCharList[1].charLetterList[this.acceptCharList[1].charLetterList.length-1];
}
isNull (value){
  if (value == "" )return true; return false;
}

setException (value){
  this.exception = value;
}
getException (){
  return this.exception;
}
}
module.exports = ValidatorControler;
