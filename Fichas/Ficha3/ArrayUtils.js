var log = {
    isEmpty: function (array) {
        if (array.length == 0) {
            return true;
        } else {
            return false;
        }
    },
    max: function (array) {
        var max = array[0];
        for (let i = 0; i < array.length; i++) {
            if (array[i] > max) {
                max = array[i];
            }
        }
        return max;
    },
    min: function (array) {
        var numeros = array[0];
        for (let i = 0; i < array.length; i++) {
            if (array[i] < numeros) {
                numeros = array[i];
            }
        }
        return numeros;
    },
    average: function (array) {
        var med = 0;
        for (let i = 0; i < array.length; i++) {
            med = med + array[i];
        }
        med = med / array.length;
        return med;
    },
    indexOf: function (array, value) {
        var index = -1;
        for (let i = 0; i < array.length; i++) {
            if (array[i] == value) {
                index = i;
                break;
            }
        }
        return index;
    },
    subArray: function (array, startIndex, endIndex) {
        var sub = [];
        for (let i = startIndex; i < array.length && i <= endIndex; i++) {
            sub.push(array[i]);
        }
        return sub;
    },
    isSameLength: function (a1, a2) {
        if (a1.length == a2.length) {
            return ("É do mesmo tamanho");
        } else {
            return ("Não é do mesmo tamanho");
        }
    },
    reverse: function (array) {
        inverso = [];
        for (let i = array.length - 1; i >= 0; i--) {
            inverso.push(array[i]);
        }
        return inverso;
    },
    swap: function (array, index1, index2) {
        let troca = array[index1];
        array[index1] = array[index2];
        array[index2] = troca;
        return array;

    },
    contains: function (array, value) {
        if (this.indexOf(array, value) == -1)
            return false;
        else
            return true;

    },
    concatenate: function (a1, a2) {
        let juntar = [];
        for (let i = 0; i < a1.length; i++) {
            juntar.push(a1[i]);             
        }
        for (let j = 0; j < a2.length; j++) {
            juntar.push(a2[j]);            
        }
        return juntar;
    }
}
module.exports = log;