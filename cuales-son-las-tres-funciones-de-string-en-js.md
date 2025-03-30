# ¿Cuáles son las tres funciones de String en JS?

### Funciones modificadoras

* toUpperCase( ): transforma el string a **mayúsculas**.

```javascript
var text = "Lorem ipsum dolor sit amet consectetur adipiscing elit tincidunt facilisi"

console.log(text.toUpperCase()) //LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISCING ELIT TINCIDUNT FACILISI
```

* toLowerCase( ): transforma la string a **minúsculas.**

```javascript
var text = "LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISCING ELIT TINCIDUNT FACILISI"

console.log(text.toLowerCase()) //lorem ipsum dolor sit amet consectetur adipiscing elit tincidunt facilisi

```

* replace( ): **reemplaza** texto en una string.

```javascript
var text = "Lorem ipsum dolor sit amet consectetur adipiscing elit tincidunt facilisi"

console.log(text.replace("ipsum", "replaced")) //Lorem replaced dolor sit amet consectetur adipiscing elit tincidunt facilisi

```

* replaceAll( ): busca un valor en un texto y lo **sustituye** en todas sus coincidencias.

```javascript
var text = "Mi gata es blanca. Mi gato es negro."

console.log(text.replaceAll("es", "era"))//Mi gata era blanca. Mi gato era negro.

```

* concat( ): devuelve 2 o mas **cadenas unidas**.

```javascript
var text = "Mi gata es blanca. "
var text2= "Mi gato es negro."

console.log(text.concat(text2))// Mi gata es blanca. Mi gato es negro.
```

* padEnd( ): **añade** **caracteres al final** de una string, si no se especifica nada, añade espacios.

```javascript
var text = "Mi gata es blanca. Mi gato es negro."

console.log(text.padEnd(50, "Ambos tienen manchas")) //Mi gata es blanca. Mi gato es negro.Ambos tienen m
//JS cogerá la string 'ambos tienen manchas' y la  repetirá hasta llegar a 50 caracteres. Como la cadena inicial cuenta con 36 caracteres, la rellenará con 14 caracteres mas.
```

* padStart( ): **añade** **caracteres al pricipio** de una string, si no se especifica nada, añade espacios.

```javascript
var text = "Mi gata es blanca. Mi gato es negro."

console.log(text.padStart(50, "Tengo 2 gatos. ")) //Tengo 2 gatos.Mi gata es blanca. Mi gato es negro.
```

* repeat( ): **repite** una string un número específico de veces.

```javascript
var text = "Mi gata es blanca."

console.log(text.repeat(5))//Mi gata es blanca.Mi gata es blanca.Mi gata es blanca.Mi gata es blanca.Mi gata es blanca.
```

* slice( ): **extrae** una parte de una string.

```javascript
var text = "Mi gata es blanca."

console.log(text.slice(3,7))//gata

```

* split( ): **divive** una string en un array de substring usando un separador específico.

```javascript
var text = "Mi gata es blanca."

console.log(text.split(" "))//(4) ["Mi", "gata", "es", "blanca."]
```

* substring( ): **extrae** caracteres de una string **entre dos índices** especificados.

```javascript
var text = "Mi gata es blanca."

console.log(text.substring(0,7))//Mi gata
```

* trim( ): devuelve una string **eliminando los espacios al principio y al final** de esta.

```javascript
var text = "    Mi gata es blanca.   "

console.log(text.trim())// Mi gata es blanca.
```

* trimEnd( ): devuelve una string **eliminando los espacios al final** de esta.

```javascript
var text = "    Mi gata es blanca.   "

console.log(text.trimEnd())//    Mi gata es blanca.
```

* trimStart( ): devuelve una string **eliminando los espacios al principio** de esta.

```javascript
var text = "    Mi gata es blanca.   "

console.log(text.trimStart())//Mi gata es blanca.   //
```

### **Funciones para Extraer Cadenas**

* at( ): **devuelve un carácter indexado** de una string. Acepta índices negativos.

```javascript
var text = "Mi gata es blanca."

console.log(text.at(-5))//a

```

* charAt( ): **devuelve un carácter en un índice especificado**. No acepta índices negativos.

```javascript
var text = "Mi gata es blanca."

console.log(text.charAt(8))//e
```

* match( ): busca en una string un valor  o expresión regular y **devuelve las coincidencias.**

```javascript
var text = "Mi gata es blanca."

console.log(text.match("gata"))//(1) ["gata", 3, "Mi gata es blanca."]
```

* toString( ): **convierte un valor u objeto en string**.

```javascript
var phoneNum = 666555444

console.log(phoneNum.toString())//666555444 ahora es una string
```

* valueOf( ): **devuelve el valor primitivo** de un objeto, es decir, convierte  el objeto a su tipo de dato primitivo.

```javascript
var animal = {
  raza: "gata",
  color: "blanca",
  valueOf: function() {
    return this.raza;
  }
};

console.log(animal.valueOf()); //gata
console.log("Mi " +animal + " se llama Xayah"); //Mi gata se llama xayah
```

### **Funciones para Recuperar Índices**&#x20;

* indexOf( ): **devuelve el índice** de la **primera aparición** de un valor en una cadena. Si el valor no se encuentra devuelve `-1`&#x20;

```javascript
var text = "Mi gata es blanca."

console.log(text.indexOf("gata"))//3
```

*   lastIndexOf( ): **devuelve el índice** de la **última aparición** de un valor en una cadena. Si el valor no se encuentra devuelve `-1`&#x20;

    ```javascript
    var text = "Mi gata es blanca. Mi gato es negro"

    console.log(text.lastIndexOf("es"))//27
    ```
* search( ): busca en una string o expresión regular y **devuelve el índice de la coincidencia.**

```javascript
var text = "Mi gata es blanca. Mi gato es negro"

console.log(text.search("blanca"))//11
```



{% embed url="https://www.w3schools.com/jsref/jsref_obj_string.asp" %}
