# ¿Cuál es la diferencia entre una declaración de función y una expresión de función?

La principal diferencia entre una declaración y una expresión de función es que la `declaración de función` se **analiza antes de ejecutar** cualquier código, significa, que **se puede llamar** a la `función declarada` **posteriormente** en el código mientras que la `expresión de función` **no se puede invocar antes de su definición.**

Esto es debido al [`hoisting`](#user-content-fn-1)[^1] .



<table><thead><tr><th>CARACTERISTICAS</th><th width="275">DECLARACION DE FUNCION</th><th width="237">EXPRESION DE FUNCION</th></tr></thead><tbody><tr><td>Sintaxis</td><td><code>function</code> <code>namefunction( ) {    }</code></td><td><code>const nameFunction = function( ) {  }</code></td></tr><tr><td>Hoisting</td><td>Sí. La función es elevada ala parte superior</td><td>No.  La función no puede ser llamada antes de su definición</td></tr><tr><td>Asignación</td><td>No se asigna una variable, se declara directamente</td><td>Se asigna una variable o  const</td></tr><tr><td>Uso de la función</td><td>Se puede invocar en cualquier lugar del código, incluso antes de su definición</td><td>Solo se puede invocar después de su asignación</td></tr><tr><td>Cuando Usarlas</td><td>Cuando se necesita crear una función que se utilizará en todo el código</td><td>Cuando una función debe usarse una o varias veces o cuando hay que pasarla como argumento</td></tr><tr><td>Anonimidad</td><td>No, siempre tiene que tener un nombre</td><td>Sí, las expresiones de función suelen ser anónimas</td></tr><tr><td>Rendimiento</td><td>No hay diferencia de rendimiento</td><td>No hay diferencia de rendimiento</td></tr><tr><td>Beneficios</td><td>Hace el código más legible.</td><td> Más flexibles, se puede usar una misma función en diferentes lugares.</td></tr></tbody></table>

### Declaracion de funcion

Las `declaraciones de función` se crean al crear una función y asignarle un nombre. El nombre de la función se declara al escribir la palabra clave `function` .

#### Ejemplo

```javascript
function myFunction(){
  console.log("This is my function")
}

myFunction()
```

### Expresion de funcion

La `expresión de función` se crea cuando se crea una función y le se asigna una variable.

Se pueden usar para crear cierres, pasarse como argumentos a otras funciones e invocarse inmediatamente.

#### Ejemplo

```javascript
const myFunction = function( ) { 
  console.log("This is my function")
}

myFunction()
```





{% embed url="https://www.sitepoint.com/when-to-use-a-function-expression-vs-function-declaration/#whatarefunctionexpressions" %}

[^1]: comportamiento en el que  las declaraciones de variables y funciones se 'elevan' antes de que el código se ejecute
