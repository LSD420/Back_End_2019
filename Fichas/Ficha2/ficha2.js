//========= Exercicio 1 =======================================
function imc(peso, altura) {
    var imc = peso / (altura) ^ 2;
    if (imc < 18.5) {
        info = ("abaixo do peso");
    } else if (imc >= 18.5 && imc <= 25) {
        info = ("no peso normal");
    } else if (imc > 25 && imc <= 30) {
        info = ("acima do peso");
    } else {
        info = ("obeso");
    }
    return info;
}
console.log(imc(60, 1.72));

//========= Exercicio 2 =======================================
function inverso(frase) {
    var strSplitted = frase.split(" ");
    var reverso = "";
    for (let i = 0; i < strSplitted.length; i++) {
        var palavra = strSplitted[i];
        for (let j = palavra.length - 1; j >= 0; j--) {
            reverso += palavra[j];
        }
        reverso += " ";
    }
    return reverso;
}
console.log(inverso("Hoje é Domingo"));

//========= Exercicio 3 =======================================
function vogais(frase) {
    var cont = 0;
    for (let i = 0; i < frase.length; i++) {
        if (frase[i] == "a" || frase[i] == "e" || frase[i] == "i" || frase[i] == "o" || frase[i] == "u") {
            cont += 1;
        }
    }
    return cont;
}
console.log(vogais("Qualquer coisa"));

//========= Exercicio 4 =======================================
function letras(frase, letra) {
    var cont = 0;
    var inverso = frase.toLowerCase();
    for (let i = 0; i < inverso.length; i++) {
        if (inverso[i] == letra) {
            cont++;
        }
    }
    return [cont, letra, frase];
}
console.log(letras("Abecedario", "a"));

//========= Exercicio 5 =======================================
function tempo(entrada, saida) {
    // Incompleto
    var hentrada = entrada.split(":");
    var hsaida = saida.split(":");
    var horaentrada = hentrada[0]; var horasaida = hsaida[0];
    var mentrada = hentrada[1]; var msaida = hsaida[1];

    return hentrada;
}
console.log(tempo("08:00", "16:00"))

//========= Exercicio 6 =======================================
function retangulo(largura, altura) {
    for (let j = 0; j < altura; j++) {
        // for (let i = 0; i < altura; i++) {
        console.log("*".repeat(largura));
        // }        
    }
}
console.log(retangulo(20, 10));
console.log("EXERCICIO 7");

//========= Exercicio 7 =======================================
function triangulo(altura) {
    for (let j = 1; j <= altura; j++) {
        console.log("*".repeat(j))
    }
}

triangulo(10);
//========= Exercicio 8 =======================================
function caixa(lado) {
    i= 0
    // for (let j = 0; j < 4; j++) {
        // for (let i = 0; i < lado-1; i++) {
            // if (i >= 1 && i < lado - 1) {
            //     console.log(" ".repeat(lado))
            // } else {
            //     console.log("*".repeat(lado));
            // }
            console.log("*".repeat(lado));
            // if (i >= 0 && i <= 8) {
            //     console.log(("*" + "g".repeat(lado-2) + "*").repeat(8));
            //     i++;
            // }
            for ( i = 0; i < 7; i++) {
                console.log("*" + " ".repeat(lado-2) + "*");
            }
            console.log("*" + " ".repeat(lado-2) + "*");
            console.log("*".repeat(lado));
            // console.log(' '.repeat(lado-1))

        // }
    // }
}
console.log("Exercício 8");
caixa(10);