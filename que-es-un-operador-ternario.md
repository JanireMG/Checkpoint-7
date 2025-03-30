# ¿Qué es un operador ternario?

Es un **operador condicional .** Es el único operador en `JavaScript`  que tiene 3 operandos[^1].

Se usa con bastante frecuencia  como atajo para las instrucciones `if`.

Es una **forma compact**a de escribir una declaración `if-else` en una sola línea.

### Sintaxis

```javascript
condición ? valorSiVerdadero : valorSiFalso;
```

* **`condición`**: Es la expresión que se evalúa. Si es **verdadera**, se ejecuta el valor que está antes del `:`. Si es **falsa**, se ejecuta el valor después del `:`.
* **`valorSiVerdadero`**: El valor o la expresión que se devuelve si la condición es verdadera.
* **`valorSiFalso`**: El valor o la expresión que se devuelve si la condición es falsa.

#### Ejemplo

```javascript
var height = 1.40
var msg = (height >= 1.55) ? "Puedes montar en la atraccion" : "No puedes montar en la atracción";

console.log(msg) //No puedes montar en la atracción
```

### Uso de operadores ternarios anidados

Es **posible anidar** `operadores ternarios` para trabajar con varios resultados a la vez.

#### Ejemplo

```javascript
var height = 1.55
var msg = (height >= 1.60) ? "Puedes montar en las atracciones":
          (height >= 1.50) ? "Puedes montar en las atracciones indicadas" : 
          "No puedes montar en la atracción";

console.log(msg)//Puedes montar en las atracciones indicadas
```



{% embed url="https://lenguajejs.com/fundamentos/estructuras-de-control/operador-ternario/" %}

[^1]: cualquier  valor o variable que se utiliza en una operación
