'use strict';

function foo(arg) {
    let result = '...';
    if (typeof arg === 'string'){
       const maxLength = 30;
       const string = arg.trim();
       if(string.length > maxLength){
           result = string.substr(0,maxLength) + '...';
    }else{
        result = string;
    }
}
return result;
};
console.log("foo(): ", foo());
console.log("foo(): ", foo("    Строка менее 30 символов     "));
console.log(
  "foo(): ",
  foo("    Строка более 30 символов - Lorem Ipsum is simply dummy text of the printing and typesetting industry.")
);