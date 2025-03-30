# ¿Qué es la palabra clave "this" en JS?

La palabra clave `this`  hace referencia al contexto de ejecución en el que se encuentra.

Principalmente se utiliza para evitar la confusión entre atributos de clase y parámetros con el mismo nombre.

### Usos de las palabra clave 'this'

* Invocar el constructor de la clase actual.
* Invocar el método de la clase actual.
* Devolver el objeto de la clase actual.
* Pasar un argumento en la llamada del método.
* Pasar un argumento en la llamada al constructor.

```javascript
const myNum = {
  num: 28,
  func: function () {
    return this.num;
  },
};

console.log(myNum.func());
```

### This en el ámbito global

En el ámbito global, `this` hace referencia :

* En **modo no estricto**: `this` es el objeto **`window` en el navegador** o **`global` en Node.js.**
* En **modo estricto:** `this` is `undefined` .

### This dentro de un objeto (método)

Dentro de un objeto, `this` hace referencia al propio objeto, es decir, `this` es el objeto que llama al método.

#### Ejemplo

```javascript
const myName = {
  name: "Janire",
  greet() {
    console.log(`Hola, me llamo ${this.name}`);
  }
};

myName.greet();
```

### This en una función con new (constructores)

Cuando usamos una función como constructor con `new`, `this` apunta al **nuevo objeto creado**.

#### Ejemplo

```javascript
function myName(name) {
  this.name = name;
}

const name1 = new myName("Janire");
console.log(name1.name);
```

### This en eventos del DOM

Si usamos `this` dentro de un manejador de eventos, este hace referencia al elemento `HTML` que disparó el evento.

En ese caso, `this` es el elemento HTML.

```javascript
document.querySelector("button").addEventListener("click", function() {
console.log(this); 
}) //hace referencia a boton clickado
```

### This en funciones flecha

Las funciones flecha no tienen su propio `this`, lo **heredan del contexto** en el que fueron definidas.

#### Ejemplo

```javascript
const myName = {
  name: "Janire",
  greet: function() {
    const flecha = () => console.log(this.name);
    flecha();
  }
};

myName.greet();
```

Usar call( ), apply( ), y bind( )

Con estas funciones podemos cambiar el valor de `this`.

#### Ejemplo

```javascript
function greet() {
  console.log(this.name);
}

const myName = { name: "Janire" };

greet.call(myName); // 'call' ejecuta la función permitiendo pasar argumentos de manera individual
greet.apply(myName); //'apply' ejecuta la función, pasando los argumentos en un array.

const newFunction = greet.bind(myName); //'bind' devuelve una nueva función con this fijado.
newFunction(); 
```
