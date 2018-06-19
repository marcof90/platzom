'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = platzom;
function platzom(str) {
    var translation = str;

    //si la palabra es un palindromo ninguna regla anterior cuenta
    var reverse = function reverse(str) {
        return str.split('').reverse().join('');
    };

    if (str == reverse(str)) {
        return minMay(str);
    }

    function minMay(str) {
        var length = str.length;
        var translation = '';
        var capitalize = true;
        for (var i = 0; i < length; i++) {
            var char = str.charAt(i);
            translation += capitalize ? char.toUpperCase() : char.toLowerCase();
            capitalize = !capitalize;
        }
        return translation;
    }

    //si la palabra termina en "ar", se eliminan esos dos caracteres
    if (str.toLowerCase().endsWith('ar')) {
        translation = str.slice(0, -2);
    }

    //si la palabra inicia con z se le añade "pe" al final
    if (str.toLowerCase().startsWith('z')) {
        translation = translation + 'pe';
    }

    //si la palabra traducida tiene 10 o mas letras
    //se debe partir a la mitad y unir con un guion
    if (translation.length >= 10) {
        var mitad1 = translation.slice(0, Math.round(translation.length / 2));
        var mitad2 = translation.slice(Math.round(translation.length / 2));

        translation = mitad1 + '-' + mitad2;
    }

    return translation;
}