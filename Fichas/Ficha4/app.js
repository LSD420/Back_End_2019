// var obj = {
//     name: " ",
//     age: " ",
//     gender: " ",
// }
// var jsonobj = JSON.stringify(obj);
// console.log(jsonobj);
// /* DOIS */
// var obj2 = {"Qualquer":"coisa", "numero":666};
// jsonobj2 = JSON.parse(obj2);



var Emitter = require("./emitter");
var eventConstants = require('./config');
var emtr = new Emitter();

console.log(eventConstants.events.GREET);

emtr.on(eventConstants.FILESAVED, function(){
    console.log("A file was saved 1");
});

emtr.on(eventConstants.GREET, function(){
    console.log("A file was saved 2");
});

emtr.emit(eventConstants.FILESAVED);
