# translatorComponent
Component to translate Sytem number to another System number. It was built by React.js.

#Using
Only we need to use is add HTMLElement id like as "app".
Example:
```sh
  <section id="app">
    </section>
```
Of course, if we need another id. We have to edit file View/app.js and change codeLine 17. Example:
```sh
  ReactDom.render(<App nameForm="formExample" />, document.getElementById('yourID'));
```
# Require (dev-version):
- webpack
- babel-loader
- babel-preset-es15
- babel-core
- babel-polyfill

# Architecture
The Project has used the MVC pattern.
 - Model: Model.js
 - Controler: Controler.js, genCharControler.js, TransferControler.js, ValidatorControler.js
 - View: Components.
 
# Task Model.js
 
 Represents the number of the form:
  - inputSystemNumber: Which system Number used.
  - outputSystemNumber: Which system Number we want. 
  - inputNumber: input
  - resultNumber: result.
  
# Task Controler.js
   - Menagment Controlers.
      
#Task genCharControler.js
Generate accepted array Char.
#### Arg:
- Object Digit. 

#### Field:
- Digit. 
 - Type:Object. 
 - Class:Model.
- acceptedCharList.
 - Type: String.
- inputCharList.
 - Type:String.
- outputCharList
 - Type:String.

#### Methods:     
 -  generateInputCharList : generate input CharList.Set charInputSystem.
 -  generateOutputCharList : generate output CharList. Set charOutPutSystem.
        
#Task validatorControler.js
Validate input.
#### Arg:
- Object Digit, 
- String acceptedCharList.

#### Fields:
- Digit.
 - Type: Object.
 - Class: Model.
- AcceptedCharList.
 - Type:Array String.
 
##### Methods:
-  init: Init Object.
-  isEmpty: Is empty Input. Return false/true.
-  isNum : Check is number. Return false/true. Set exception.
-  isCorectInputNumber: Check test regex (acceptedCharList). Return false/true.
-  constructRegex: construct Object regex. return Object new RegExp.      

#Task transferControler.js
Transfer system number. Throw exception.
#### Arg:
- Object Digit.

#### Fields:
- Digit
 - Type: Object
 - Class: Model
- Score
 - Type: String.

#### Methods:
 - transferSystem10: Transfer to decimal Number. Return Number.
 - transferOutputSystem: Transfer to final system.
 - convertLetterToNum: Transfer letter to system Number.
 - convertNumToLetter: Transfer number to letter.
 
        
  
