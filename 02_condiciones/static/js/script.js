/*1. El Portero Digital
Crea una variable edad. Si la edad es 18 o más, muestra por consola: 
"Acceso permitido a la App". Si es menor, muestra: 
"Acceso denegado: necesitas ser mayor de edad".
*/

function edadApp() {
    let edad = parseInt(prompt("Ingrese su edad: "));

    if (edad < 0 && edad >= 130) {
        alert("Ingrese una edad valida.");
    } else if (edad < 18) {
        alert("Acceso denegado: necesitas ser mayor de edad");
    } else if (edad >= 18) {
        alert("Acceso permitido a la App");
    }
}


/*2. Validador de Nombres
Declara una variable nombre.
Si el nombre no está vacío, crea un arreglo llamado usuarios y agrega el nombre usando .push().
Si está vacío, muestra: "Error: El nombre no puede estar en blanco".
*/

function nombre() {
    let nombre = prompt("Ingrese su nombre: ");
    let usuarios = [];

    if (nombre !== "") {
        usuarios.push(nombre);
        alert(`Hola ${usuarios}`);
    } else {
        alert("Error: El nombre no puede estar en blanco");
    }
}

/* 3. El Filtro de Duplicados
Tienes esta lista: let productos = ["celular", "teclado", "mouse"];
Declara una variable nuevoProducto.
Si el producto no está en la lista (usa .includes()), 
agrégalo al final y muestra la lista completa.
Si ya existe, muestra: "El producto ya está en el inventario".
*/

function nuevoProducto() {
    let productos = ["celular", "teclado", "mouse"];
    let nuevoProducto = prompt("Ingrese un producto: ");

    if (productos.includes(nuevoProducto)) {
        alert("El producto ya está en el inventario");
    } else {
        alert("El producto no está en el inventario");
    }
}


/* 4. Control de Stock Máximo
Imagina que una bodega solo tiene espacio para 5 cajas.
let bodega = ["caja1", "caja2", "caja3", "caja4", "caja5", "caja6"];
Si el tamaño de la bodega (.length) es mayor a 5, 
elimina la última caja con .pop() y muestra: "Bodega llena, eliminando último ingreso".
Si es 5 o menos, muestra: "Espacio disponible".
*/

function controlStock() {
    let bodega = ["caja1", "caja2", "caja3", "caja4", "caja5", "caja6"];

    if (bodega.length <= 5) {

        alert("Espacio disponible");
    } else {
        alert("Bodega llena, eliminando último ingreso");
        bodega.pop();
    }
}


/*
5. Limpieza de Datos
A veces recibimos datos basura. let colaEspera = ["error_404", "Juan", "Sofía"];
Si el primer elemento (índice 0) es igual a "error_404", 
elimínalo usando .shift() y muestra la cola limpia.
Si no, muestra: "La lista de espera está correcta".
*/
function limpiezaDatos() {
    let colaEspera = ["error_404", "Juan", "Sofía"];

    if (colaEspera[0] === "error_404") {
        colaEspera.shift();
        alert(colaEspera);
    } else {
        alert("La lista de espera está correcta");
    }
}


/*6. Acceso VIP
Tienes una lista de usuarios comunes: let foro = ["User1", "User2"];
Declara la variable rol.
Si el rol es "Admin", agrega el nombre al inicio de la lista con .unshift() para que tenga prioridad.
Si no es Admin, agrégalo al final con .push().
*/
function accesoVIP() {
    let foro = ["User1", "User2"];
    let rol = prompt("Ingrese su usuario/rol: ")
    if (rol.toLowerCase() === "admin") {
        foro.unshift(rol);
        alert(foro);
    } else {
        foro.push(rol);
        alert(foro);
    }
}


/*7. Sistema de Calificaciones Chile (Escala 1 a 7)
Crea una variable nota.
Si la nota es 6 o superior: "Excelente, eximido".
Si la nota es entre 4 y 5.9: "Aprobado, vas a examen".
Si es menor a 4: "Reprobado".
(Pista: Usa else if).
*/

function sistemaNotas() {
    let notas = parseFloat(prompt("Ingrese su nota: "));
    if (notas >= 6) {
        alert("Excelente, eximido");
    } else if (notas === 4 && notas <= 5.9) {
        alert("Aprobado, vas a examen");
    } else if (notas < 4) {
        alert("Reprobado");
    } else {
        alert("Ingrese una nota valida.")
    }
}



/*8. Buscador de Invitados
let invitados = ["Ana", "Luis", "Camila", "Diego"];
Crea una variable persona.
Si la persona está en la lista, muestra: "¡Bienvenido/a [nombre]! Pasa a la fiesta".
Si no está, muestra: "Lo siento, no estás en la lista de invitados".
*/

function buscarInvitados() {
    let invitados = ["Ana", "Luis", "Camila", "Diego"];
    let personas = prompt("Ingrese su nombre: ");

    if (invitados.includes(personas)) {
        alert(`¡Bienvenido/a ${personas}! Pasa a la fiesta`);
    } else {
        alert("Lo siento, no estás en la lista de invitados");
    }
}



/*9. El Almacén de Matrices (2D Arrays)
Imagina una estantería con dos niveles (una matriz):
let estanteria = [ ["Manzanas", "Peras"], ["Leche", "Yogur"] ];
Crea una variable seccion (0 o 1) y una variable producto.
Accede a la sección elegida. Si el producto solicitado 
está en esa sub-lista, muestra: "Producto encontrado en el estante".
Si no, muestra: "No tenemos ese producto en esa sección".
*/
function almacenMatrices() {
    let estanteria = [ ["Manzanas", "Peras"], ["Leche", "Yogur"] ];
    let seccion = prompt("Ingrese una sección (0 o 1): ");
    let producto = prompt("Ingrese un peoducto: ");

    if (estanteria[seccion].includes(producto)) {
        alert("Producto encontrado en el estante");
    } else {
        alert("No tenemos ese producto en esa sección");
    }
}



/* 10. Registro Maestro de Visitas
Crea un arreglo vacío llamado bitacora.
Declara las variables nombreVisita y esVip (booleano).
Si el nombre está vacío: Mostrar error.
Si el nombre existe y esVip es true: Agregarlo al inicio con .unshift().
Si el nombre existe y esVip es false: Agregarlo al final con .push().
Al final, muestra cuántas personas hay en total usando .length.
*/

function registroVisitas() {
    let bitacora = [];
    let nombreVisita;
    let esVip;

}