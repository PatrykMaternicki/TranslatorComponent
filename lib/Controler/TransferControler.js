/*Transfer Number to another System Number */

class TransferControler {
  constructor(Digit){
    this.Digit = Digit;
    this.score = "";
  }

  init ()
  {
      this.transferOutputSystem(this.transferSystem10());
  }
  transferSystem10(){
    var outPutNum10 = new Number();
    var stringNumber =this.createStringNum();
    for (var i = 0; stringNumber.length > i; i++){
        if (this.Digit.getInputSystemNumber() > 9 ) stringNumber[i] = this.convertLetterToNum(stringNumber[i]);
       outPutNum10 = outPutNum10 +  (Number.parseInt(stringNumber[i]) * Math.pow(this.Digit.getInputSystemNumber(),i));
    }

    return outPutNum10;
  }

  transferOutputSystem(value){
  var value = value;
  var moduloString = new Array ();
  while (value !=0){
    var modulo =  value % this.Digit.getOutputSystemNumber();
    value = value - modulo;
    moduloString.push(modulo);
     value = value/this.Digit.getOutputSystemNumber();
  }
  var rev = moduloString.reverse();
  if (this.Digit.getOutputSystemNumber() > 9  ) rev = this.convertNumToLetter(rev);
  this.setScore(rev.join(''));
  }
  createStringNum (){
    var inputNumber = this.Digit.getInputNumber();
    var arr = new Array ();
    for (var i= 0; inputNumber.length > i; i++){
      arr.push(inputNumber[i]);
    }
    return arr.reverse();
  }

  convertLetterToNum (value){
      var pattern = '0123456789ABCDEF';
        var findIndex = pattern.indexOf(value.toUpperCase(), 0);
        return findIndex


  }
  convertNumToLetter(value){
    var newString = new Array();
    var pattern = '0123456789ABCDEF';
    for (var i= 0; value.length > i; i++){
      newString.push(pattern[new Number(value[i])]);
    }
    return newString;
  }
setScore (result){
  this.score = result;
}
getScore (){
  return this.score;
}
}

module.exports = TransferControler;
