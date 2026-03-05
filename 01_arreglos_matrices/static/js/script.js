/* Ejercicio 1: El Mensaje Desordenado (Push y Pop)
Instrucciones: Crea una función llamada construirFrase. 
Dentro de ella, define el arreglo let palabras = ["programar", "es"];.
Usa .push() para agregar "increíble" al final.
Usa .push() para agregar "borrar" al final.
Usa .pop() para eliminar "borrar".
Muestra con alert() la frase unida por espacios.
*/

let palabras = ["programar", "es"];
function construirFrase() {
    palabras.push("increíble");
    palabras.push("borrar");
    let eliminada = palabras.pop("borrar");

    // alert(`Frase: ${palabras[0]} ${palabras[1]} ${palabras[2]}`);
    alert(`El ${palabras.join(" ")}`);
    alert(`La palabra eliminada fue: "${eliminada}"`)

}

/* Ejercicio 2: Gestión de Fila de Espera (Shift y Unshift)
Instrucciones: Crea una función donde definas let alumnos = ["Juan", "María", "Pedro"];.
Un nuevo alumno, "Luis", llega primero a la fila (usa .unshift()).
El primer alumno de la fila entra a clases (usa .shift() y guarda ese nombre en una variable).
Muestra un alert() que diga: "Entró [nombre] y la fila ahora es: [el resto del arreglo]".
*/

let alumnos = ["Juan", "María", "Pedro"];
function gestionFila() {
    alumnos.unshift("Luis");

    alert(`Entró ${alumnos[0]} y la fila ahora es: ${alumnos[1]}`);

    let alumno = alumno.shift();
}


/* Ejercicio 3: Reordenando Números (Lógica de Índices)
Instrucciones: Crea una función que reciba el arreglo let datos = [3, "gatos", "negros", "duermen"];.
Accede al número 3 y súmale 2 directamente en la operación de concatenación.
Construye la frase: "5 gatos negros duermen plácidamente".
Muestra el resultado con alert().
*/

let datos = [3, "gatos", "negros", "duermen"];
function reordenandoNumeros() {
    datos.shift()
    datos.unshift(5)

    alert(`Frase: ${datos[0]} ${datos[1]} ${datos[2]} ${datos[3]} plácidamente`);
}

/*Ejercicio 4: Coordenadas en la Matriz (Suma Simple)
Instrucciones: En una función, define:
let matriz = [
  [10, 20],
  [30, 40]
];
Accede al número 10 y al 40.
Suma ambos valores y muestra el resultado con un alert() 
que explique qué posiciones sumaste (ej: "Suma de [0][0] y [1][1]").
*/

let matriz = [
    [10, 20],
    [30, 40]
];
function sumaValores() {
    let num1 = matriz[0][0];
    let num2 = matriz[1][1];
    let suma = num1 + num2;

    alert(`La suma de ${num1} y ${num2} es: ${suma}`);
}

/* Ejercicio 5: El Intruso en la Tercera Dimensión
Instrucciones: Crea una función con la matriz: let datos = [1, [2, [3, 4]]];.
Accede al número 4.
Usa .push() para agregar el número 5 al mismo sub-arreglo donde está el 4.
Muestra la matriz completa en un alert().
*/

let datoss = [1, [2, [3, 4]]];
function datoss() {
    datoss.push()
    alert(`Matriz: ${datoss}`);
}

