# Platzom

Platzom es un idioma inventado para el curso de fundamentos
de javascript en [Platzi](https://platzi.com)

## Descripcion

- Si la palabra termina con "ar", se le quitan esas dos letras
- Si la palabra inicia con Z, se le añade "pe" al final
- Si la palabra traducida tiene 10 o más letras, se debe partir en dos por la mitad y unir con un guión medio
- Por último, si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercalando letras mayúsculas y minúsculas

## Instalacion

```
npm install platzom
```

## Uso

```
import platzom from 'platzom'

platzom("programar") //program
```

## Credits
- [Marco Fidel](https://www.facebook.com/marcofidel.sanabriarueda)

## Licence

- [MIT](https://opensource.org/licenses/MIT)