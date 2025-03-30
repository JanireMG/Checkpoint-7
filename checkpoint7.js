//Cree una función JS que acepte 4 argumentos. Suma los dos primeros argumentos, luego los dos segundos y multiplícalos. Si el número creado es mayor que 50, la consola registra "¡El número es mayor que 50!". Si es más pequeño, la consola registra "¡El número es menor que 50!"

function myFunction(arg1, arg2, arg3, arg4) {
    const sum1 = arg1 + arg2;
    const sum2 = arg3 + arg4;
    const result = sum1 * sum2;

    if (result > 50) {
        return "¡El número es mayor que 50!";
    } else {
        return "¡El número es menor que 50!";
    }
}

console.log(myFunction(33, 5, 20, 25));