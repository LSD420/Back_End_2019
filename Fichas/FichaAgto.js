function imc(peso, altura) {
    var imc = peso / (altura)^2;
    if (imc <= 18.5) {
console.log("abaixo do peso");
    }else if (imc <= 25) {
        console.log("no peso normal");
    } else if (imc <=30 ){
console.log("acima do peso");   
    }else if (imc >30) {
        console.log("obeso");
    }
}
imc(60, 1.70);
