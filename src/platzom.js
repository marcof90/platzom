export default function platzom(str){
    let translation = str

    //si la palabra es un palindromo ninguna regla anterior cuenta
    const reverse = (str) => str.split('').reverse().join('')

    if(str == reverse(str)){
        return minMay(str)
    }

    function minMay(str) {
        const length = str.length
        let translation = ''
        let capitalize = true
        for(let i = 0; i <length; i++){
            const char = str.charAt(i)
            translation += capitalize ? char.toUpperCase() : char.toLowerCase()
            capitalize = !capitalize
        }   
        return translation
    }

    //si la palabra termina en "ar", se eliminan esos dos caracteres
    if(str.toLowerCase().endsWith('ar')){
        translation = str.slice(0, -2)
    }

    //si la palabra inicia con z se le añade "pe" al final
    if(str.toLowerCase().startsWith('z')){
        translation = translation + 'pe'
    }
    
    //si la palabra traducida tiene 10 o mas letras
    //se debe partir a la mitad y unir con un guion
    if(translation.length >= 10 ){
        const mitad1 = translation.slice(0, Math.round(translation.length /2))
        const mitad2 = translation.slice(Math.round(translation.length /2))

        translation = `${mitad1}-${mitad2}`
    }

    

    return translation
}

