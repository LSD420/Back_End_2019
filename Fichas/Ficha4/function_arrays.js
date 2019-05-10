var array = [];
var fnc1 = function(){
    return "Hello World ";
}
var fnc2 = function() {
    return "1,2,3";
}
var fnc3 = function(){
    return console.log(fnc1,fnc2);
}
array.push(fnc3);
console.log(array);
console.log(fnc3);