# ¿Qué es un condicional?

Una condicional es una **estructura de control** que permite ejecutar diferentes bloques de código según si una condición se cumple o no.

Estas son las declaraciones condicionales;

### Declaracion if

Esta declaración se utiliza para especificar el bloque de código que se ejecutará si una condición es verdadera.

#### Sintaxis

```javascript
if  (condition){

}
```

#### Ejemplo

```javascript
if (5<10) {
    console.log('True')
}
```

### Declaración else

Esta declaración se utiliza para especificar un bloque que se ejecutará si la condición es falsa.

#### Sintaxis

```javascript
if (condition) { //si...

}else { //de lo contrario

}
```

#### Ejemplo

```javascript
if (5>10) {
    console.log('True')
}else {
    console.log('False')
}
```

### Else if

Esta declaración se utiliza para especificar una nueva condición si la primera es falsa.

#### Sintaxis&#x20;

```javascript
if (condición) { //si...

}else if (condición2) { //de lo contrario si...

}else { //de lo contrario...

}
```

#### Ejemplo&#x20;

```javascript
if (5>10) {
    console.log('Is greater')
}else if (5<10) {
    console.log('Is smaller')
}else {
   console.log('Is equal') 
}
```

### Switch Statement

Esta declaración se utiliza para realizar diferentes acciones en función de de diferentes condiciones.

#### Cómo funciona

* _Evaluación de la expresión_: La expresión que se encuentra dentro del `switch` se calcula una vez.
* _Comparación de valores_: El valor de la expresión se compara con cada uno de los valores especificados en los casos.
* _Ejecución del bloque correspondiente_: Si se encuentra una coincidencia entre el valor de la expresión y un valor de un `case`, se ejecuta el bloque de código que está asociado con ese case.
* _Bloque predeterminado_: Si no se encuentra ninguna coincidencia entre la expresión y los valores de los case, se ejecuta el bloque de código dentro del default, que es el bloque predeterminado.

#### Sintaxis

```javascript
switch(expression) {
  case x:

    break;
  case y:

    break;
  default:
  
```

#### Ejemplo

<pre class="language-javascript"><code class="lang-javascript"><strong>var hora = new Date().getHours();
</strong><strong>
</strong><strong>switch (true) {
</strong>   case (hora >= 10 &#x26;&#x26; hora &#x3C; 13):
        console.log("La tienda está abierta");
        break;
    case (hora >= 13 &#x26;&#x26; hora &#x3C; 16):  
        console.log("Hemos cerrado para comer");
        break;
    case (hora >= 16 &#x26;&#x26; hora &#x3C; 20): 
        console.log("La tienda está abierta");
        break;
    default:
        console.log("Lo sentimos, abrimos mañana a las 10:00");
}
</code></pre>

### Condiciones compuestas

Una condición compuesta es una expresión lógica que combina 2 o más condiciones simples usando operadores lógicos.

#### Sintaxis&#x20;

`&&` AND: ambas condiciones tienen que ser verdaderas.

`||` OR: una de las dos condiciones debe ser verdadera.

`!` NOT: niega una condición.

#### Ejemplo

```javascript
var dia = new Date().getDay()

if (dia == 0 || dia == 6) {
    console.log("Es fin de semana")
}else {
    console.log("Es día de ir a trabajar")
}
// los días de la semana empiezan en 0, siendo 0 el domingo.
```
