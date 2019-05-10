//========= Exercicio 3 =======================================
function started () {
    console.log("Started Download");
}
function update() {
    i = 0;
    do {
        console.log(i, "% of Download");
        i++;
    }
    while (i <= 100);
}
function completed() {
    console.log("Download Completed");
}
function performDownload(started, update, completed) {
    started();
    update();
    completed();
}
performDownload(started, update, completed);

//========= Exercicio 4 =======================================

var arrayUtils = require("./ArrayUtils.js");

var array = [6,0,8,7];
var value = 7;
var startIndex = 0;
var endIndex = 2;
var a1 = [1,9,5,2];
var a2 = [5,7,2,1,69];
var index1 = 1;
var index2 = 3;
var isEmpty = arrayUtils.isEmpty(array);
console.log(isEmpty);
// console.log (array.indexOf(value))
var max = arrayUtils.max(array);
console.log(max);
var min = arrayUtils.min(array);
console.log(min);
var average = arrayUtils.average(array);
console.log(average);
var indexOf = arrayUtils.indexOf(array,value);
console.log(indexOf);
var subArray = arrayUtils.subArray(array,startIndex,endIndex);
console.log(subArray);
var isSameLength = arrayUtils.isSameLength(a1,a2);
console.log(isSameLength);
var reverse = arrayUtils.reverse(array);
console.log(reverse);
var swap = arrayUtils.swap(array,index1,index2);
console.log(swap);
var contains = arrayUtils.contains(array,value);
console.log(contains);
var concatenate = arrayUtils.concatenate(a1,a2);
console.log(concatenate);