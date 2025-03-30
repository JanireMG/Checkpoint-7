---
cover: >-
  https://i0.wp.com/ramble.impl.co.jp/wp-content/uploads/2023/03/JavaScript%E3%82%B5%E3%83%A0%E3%83%8D%E3%82%A4%E3%83%AB.png?fit=1280%2C720&ssl=1
coverY: 0
---

# ¿Qué diferencia a Javascript de cualquier otro lenguaje de programación?

`JavaScript` es un **lenguaje interpretado**. Se interpreta a medida que se ejecuta el script. En cambio, en otros lenguajes de programación, un compilador se encarga de compilar el código en código de máquina en un paso diferente.

Al ejecutarse directamente en el navegador web lo hace accesible a los usuarios sin la necesidad de instalar plugins adicionales. Otros lenguajes, como `Python`, requieren entornos de ejecución específicos.

Funciona el cualquier navegador y en cualquier sistema operativo.&#x20;

Se integra perfectamente con `HTML` y `CSS` haciendo las páginas web más interactivas.

`JavaScript` es un [lenguaje **multiparadigma**](#user-content-fn-1)[^1] **y flexible**, permite escribir código de diferentes maneras adaptándose a distintos estilos de programación. Permite programar usando objetos, funciones o eventos. En `Java`, por ejemplo, todo el código debe ir dentro de clases y objetos.

### Sintaxis y estructura

En `JavaScript` las funciones se definen mediante la **palabra clave `function`** y las **variables** con **`var`**. La sintaxis incluye llaves **`{ }`** para definir los bloques de código y punto y coma **`;`** para separar sentencias.

En cambio en Python para definir una función se usa la **palabra clave** **`def`** y la sangría para indicar los bloques de código.

#### Ejemplo código JS VS Python

<pre class="language-javascript"><code class="lang-javascript"><strong>//CODIGO JAVASCRIPT
</strong><strong>function myName(name){ //definimos la funcion con function
</strong><strong>    return "Hello, my name is "+name+"."; //no es obligatorio usar sangría, pero usarla se considera buena práctica    
</strong>}

var greet = myName("Janire");
console.log(greet);
</code></pre>

```python
#CODIGO PYTHON
def my_name(name): #definimos la funcion con def
   return f'My name is {name}.' #si no usamos la sangría el código da error
    
greet = my_name('Janire')
print(greet)
```

### Tipos de datos&#x20;

`JavaScript` es un **lenguaje de tipado dinámico**, es decir, los tipos de variable se determinan en tiempo de ejecución en función de los valores asignados. JavaScrip permite que el tipo de dato cambie durante la ejecución.

En `C++`, por ejemplo, las declaraciones tienen que ser explícitas del tipo de datos de las variables cuando se declaran. Una vez asignado el tipo de dato, no se puede cambiar.

#### Ejemplo código JS VS  JAVA

```javascript
var age = "twenty eight"; //la variable edad es de tipo 'string'
console.log(age)

age = 28; // age ahora es un número
consolelog(age)
```

```java
public class Main {
    public static void main(String[] args) {
        String age = "twenty eight";  // la 'edad' se ha declarado como 'string'
        System.out.println(age);

        age = 28;  // Devolvería un error de compilación
        System.out.println(message);
    }
}
```

`JavaScript` cuenta con diversas bibliotecas y frameworks haciendo mas eficiente su desarrollo.

Estas son algunas de las más populares:

* **React.js.**

Biblioteca de front-end utilizada para crear interfaces de usuario. Permite crear componentes de interfaz de usuario reutilizables, facilitando la gestión de de aplicaciones complejas.

* **Angular.**

Framework front-end integral desarrollado por Google. Ofrece un conjunto completo de herramientas para crear aplicaciones complejas y ricas en funcionalidades.

* **Vue.js.**

Framework front-end progresivo fácil de integrar en proyectos existentes. Ofrece enlace de datos reactivo y una arquitectura basada en componentes.

* **Node.js.**

Es un entorno de ejecución de `JavaScript` del lado del servidor que permite a los desarrolladores crear aplicaciones de servidor escalables y eficientes.

* **Express.js.**

Framework minimalista y flexible para el servidor, basado en **node.js**. Simplifica la creación de aplicaciones y API del lado del servidor.

* **Redux.**

Es una biblioteca de gestión de estado que funciona con **React** para administrar el estado de la aplicación y hacer que los cambios de estado sean predecibles.

* **Axios.**

Es una biblioteca popular para realizar solicitudes HTTP desde el navegador o **Node.js**.



{% embed url="https://www.csharp.com/article/how-javascript-is-different-from-other-programming-languages/" %}

[^1]: Que permite programar utilizando diferentes estilos.
