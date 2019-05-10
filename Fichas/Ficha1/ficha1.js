//========= Exercicio 5 =======================================
function notaFinal(nota_pratica, nota_teorica) {

    var nota_final = (nota_pratica + nota_teorica) / 2;

    console.log(nota_final);

    if (nota_final >= 9.5) {
        console.log("aprovado");

    } else {
        console.log("reprovado");
    }
}

notaFinal(10, 10);

//========= Exercicio 6 =======================================
function mes(numeroMes) {
    var janeiro = 1;
    var fevereiro = 2;
    var março = 3;
    var abril = 4;
    var maio = 5;
    var junho = 6;
    var julho = 7;
    var agosto = 8;
    var setembro = 9;
    var outubro = 10;
    var novembro = 11;
    var dezembro = 12;

    if (numeroMes == janeiro) {
        console.log("Janeiro");
    } else if (numeroMes == fevereiro) {
        console.log("Fevereiro");
    } else if (numeroMes == março) {
        console.log("Março")
    } else if (numeroMes == abril) {
        console.log("Abril")
    } else if (numeroMes == maio) {
        console.log("Maio")
    } else if (numeroMes == junho) {
        console.log("Junho")
    } else if (numeroMes == julho) {
        console.log("Julho")
    } else if (numeroMes == agosto) {
        console.log("Agosto")
    } else if (numeroMes == setembro) {
        console.log("setembro")
    } else if (numeroMes == outubro) {
        console.log("Outubro")
    } else if (numeroMes == novembro) {
        console.log("Novembro")
    } else if (numeroMes == dezembro) {
        console.log("Dezembro")
    } else {
        console.log("Mes invalido")
    }
}

mes(1);

//========= Exercicio 7 =======================================
function conta(val1, val2, operador) {

    if (operador == '+') {
        return val1 + val2;
    } else if (operador == '-') {
        return val1 - val2;
    }
}

var r = conta(10, 20, '+');
console.log(r);

//========= Exercicio 8 =======================================
function multiplos(multiplo) {

    var mult = [];

    for (i = 1; i < multiplo; i++) {
        if (i % 5 == 0) {
            mult.push(i);
        }
    } 
    return mult;
}
console.log(multiplos(20));


//========= Exercicio 9 =======================================
function soma100(){
    soma = 0;
    i = 1;
    while(i < 100 ) {
        soma +=i;
        i++;
    }
    return soma;
}
console.log(soma100());

//========= Exercicio 10 =======================================
function fatorial(numero){
    var fato = 1
    var i = numero;
    while(i > 1 ) {
        fato *= i;
        i--;
    }
    return fato;
}
console.log(fatorial(5));

//========= Exercicio 11 =======================================
function maximo(array){
    var numeros = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > numeros ){
            numeros = array[i];
        }        
    }
    return numeros;
}
console.log(maximo([2,7,10,4]));

function minimo(array){
    var numeros = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < numeros ){
            numeros = array[i];
        }        
    }
    return numeros;
}
console.log(minimo([2,7,10,4]));

function media(array){
    var med = 0;
    for (let i = 0; i < array.length; i++) {
        med = med + array[i]
    }
    med = med / array.length
    return med;
}
console.log(media([2,7,10,4]));
