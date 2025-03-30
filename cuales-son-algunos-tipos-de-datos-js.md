# ¿Cuáles son algunos tipos de datos JS?

`JavaScript` cuenta con 8 tipos de datos, de los cuales 6 tipos son de tipo primitivo, otro de ellos de tipo primitivo especial y el último es de tipo estructural especial.

## TIPOS PRIMITIVOS

### _**Boolean**_

Un valor  `boolean` representa  uno de los dos valores: **verdadero o falso** .

```javascript
boolean = (10>7)
console.log(boolean) //devolvería 'true'
```

#### Operadores

`==` operador de igualdad

`<`  operador 'menor que'

`>` operador 'mayor que'

### _String_

Los `strings o cadenas` se usan para almacenar texto. Estos siempre se escriben entre comillas , que pueden ser dobles `" "` o simples `' '` .

Dentro de una cadena se pueden usar comillas siempre que no coincidan con las comillas que la rodean.

#### Ejemplo&#x20;

```javascript
var name = "My name is 'Janire'."
```

#### Cadenas de plantilla

Las plantillas son cadenas encerradas entre comillas invertidas `` ` ` `` . Dentro de ellas, permiten tanto comillas simples `' '` como dobles `" "`.

```javascript
var name =
`Mi nombre es Janire,
soy de Bilbao, 
tengo 28 años.`;
```

#### Longitud de una cadena

Para encontrar la longitud de una cadena, podemos utilizar la propiedad incorporada `length` .

```javascript
var text = "My name is Janire.";
var length= text.length;
```

#### Caracteres de escape

Como las cadenas van escritas entre comillas, si por error escribimos:

```javascript
var name = "My name is "Janire".";
```

La cadena se cortará en "My name is". &#x20;

Para evitar esto, podemos usar carácter de escape de **barra invertida** `\` delante de las comillas. Esto lo que hace es convertir los caracteres especiales en caracteres de cadena.

```javascript
var name = "My name is \"Janire\".";
```

### _Number_

`JavaScript` solo admite un tipo de número, estos pueden ser con o sin decimales.

```javascript
var num = 5
var numOme = 8.5
```

También pueden escribirse con notación científica

```javascript
var num = 25e4
var numOme = 25e-4
```

### _BigInt_

Las variables `BigInt` se utilizan para almacenar valores enteros grandes que son demasiado grandes para ser representados por un `JavaScript` normal `Number` .

Los números en JavaScrip se almacenan en formato punto flotante de 64 bits. Con ese estándar los números enteros grandes no se pueden representar con exactitud por lo que se redondean.

#### Cómo crear un BigInt

Se puede crear llamando a `BigInt ( )` :

```javascript
var num = BigInt(123456789123456789425);
```

También se puese crear añadiendo una `n` al final del número entero:

```javascript
var num = 123456789123456789425n;
```

### _Undefined_

Cuando a una variable simplemente ha sido asignada pero no le asignamos ningún valor, tiene el valor `undefined` .

```javascript
var userName =
console.log(userName) //devuelve undefined
```

### _Symbol_

Los `Symbol` se utilizan para añadir claves de propiedades únicas a un objeto que no sean iguales a las claves de cualquier otro código pueda añadir al objeto.

Se crean usando `Symbol( )`&#x20;

```javascript
var sym = Symbol('foo`)
```

## TIPO PRIMITIVO ESPECIAL

### _Null_

`Null` es un tipo primitivo especial.

Es un literal de JavaScript que representa un valor 'null' si el objeto no se hereda.

```javascript
var foo = 
console.log(foo) //devuelve null
```

## TIPO ESTRUCTURAL ESPECIAL

### _Object_

Los objetos en JavaScript son un tipo de dato mas flexibles. Pueden almacenar colecciones de datos de diversos tipos.

* Propiedades

Tiene las propiedades de `pares valor-clave` . Permite agregar o modificar propiedades de un objeto

#### Ejemplo

```javascript
var myName = {
    name: "Janire",
    age: 28,
    city: "Bilbao"
    };

myName.lastName = "Martinez"; //añadimos una nueva propiedad
myName.city= "Madrid"; //modificamos la propiedad 'city'

    
```

* Metodos

Los objetos pueden tener funciones como métodos. Estas funciones pueden acceder y manipular las propiedades del objeto.

#### Ejemplo

```javascript
var myName = {
    name: "Janire",
    age: 28,
    city: "Bilbao",
    greet: function() {
        return `Hola me llamo ${this.name}, soy de ${this.city} y tengo ${this.age} años.`;
    };
    
console.log(myName.greet());
```

* Metodos object

`JavaScript` tiene varios métodos para trabajar con objetos.

* `Object.keys( )` : devuelve las claves
* `Object.values( )` : devuelve los valores
* `Object.entries( )` devuele los pares valor-clave

#### Ejemplo

```javascript
var myName = {
    name: "Janire",
    age: 28,
    city: "Bilbao"
};
    
console.log(Object.keys(myName)); //devuelve ["name", "age", "city"]
console.log(Object.values(myName)); //devuelve ["Janire", 28, "Bilbao"]
console.log(Object.entries(myName)); //devuelve[["name", "Janire"], ["age", 28], ["city", "Bilbao"]]
```

* Objetos dentro de objetos

Los objetos pueden contener otros objetos como valores de sus propiedades. Esto te permite crear estructuras jerárquicas o más complejas.

#### Ejemplo

```javascript
var myName = {
    name: "Janire",
    age: 28,
    adress: {
        city: "Bilbao",
        street: "Avenida Moyua",
        number: 25
    }
};
    

console.log(myName.adress.city); // devuelve Bilbao
```

* Array como propiedades

Se pueden incluir **arrays** dentro de un objeto. Los **arrays** pueden almacenar múltiples elementos de cualquier tipo y son útiles para almacenar listas de elementos.

#### Ejemplo

```javascript
var myName = {
    name: "Janire",
    age: 28,
    city: "Bilbao",
    hobbies: ["jugar al pc", "hacer airsoft", "ver anime"]
};

console.log(myName.hobbies[0]); // devuelve "jugar al pc"
```

* Objetos literales con funciones dentro

Se puede agregar funciones directamente dentro de un objeto, haciendo el código más compacto.

#### Ejemplo

```javascript
var sumAndRest = {
  sum: function(x, y) {
    return x + y;
  },
  rest(x, y) {
    return x - y;
  }
};

console.log(sumAndRest.sum(10, 5));
console.log(sumAndRest.rest(10, 5)); 
```

* Getter y Setter

Los `getters` y `setters` permiten obtener o establecer valores en las propiedades de un objeto de forma controlada. Son métodos especiales que se utilizan como si fueran propiedades.

#### Ejemplo

```javascript
var myName = {
  _name: "Janire", //el guión bajo hace que la propiedad sea privada
  get name() {
    return this._name;
  },
  set name(newName) {
    this._name = newName;
  }
};

console.log(myName.name); 
myName.name = "Jani";
console.log(myName.name); 
```



{% embed url="https://www.w3schools.com/Js/js_datatypes.asp" %}
