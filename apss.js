
// Ingresan su nombre y apellido, y lo guardo en la variable nombreIngreso
let nombreIngreso = prompt ('Ingrese su nombre y apellido para continuar');

// Creo la variable pagoInicial, y le pongo valor 0
let pagoInicial = 0;

// Creo variable tarjeta
let tarjeta = "";

// Pregunto si el nombre ingresado no es vacio
if (nombreIngreso != "" && nombreIngreso != null) {

    // Ingresan el monto a pagar
   pagoInicial = prompt ('Para continuar, debera abonar un minimo de 150 pesos');

   // Pregunto si el monto a pagar es mayor o igual a 150
   if(pagoInicial >= 150){
        // Ingresan el numero de tarjeta
        tarjeta = prompt ('Colocar los 16 digitos de su tarjeta de credito o debito');

        if (tarjeta.length === 16){
            alert ('Bienvenido/a! ' + nombreIngreso);
        }
        else {
            alert ('Error en la lectura de la tarjeta, ingresela de nuevo');
        }
   }
   // El monto ingresado es menor a 150, mostramos error
   else{ 
        alert ('El monto es menor a 150');
   }
}
 // El nombre ingresado es vacio, mostramos error
else{
   alert ('Nombre invalido, intentalo nuevamente');
}


//Tabla de multiplicar, ciclo for

function miBotonMultiplicacion() {
    //Creo la variable tabla vacia
    let tabla ='';
    //Creo la variable multipilcarNumero con un parseInt que transforma a numero
    let multiplicarNumero = parseInt( prompt("Por favor ingrese numero"));
    //Creo el ciclo for con sus variables, condicion y operador de incremento
    for (let numero = 1; numero <= 10; numero ++){
        // Creo variable de resultado con la operacion logica
        let resultadoMultiplicar = multiplicarNumero * numero;
        // La variable tabla le asigno un valor, donde este suma todas los ciclos anteriories para mostrar todas las lineas en 1 solo alert con un br
        tabla = tabla + `${multiplicarNumero} x ${numero} = ${resultadoMultiplicar} \n`;
    }
    //Creo un alert con la variable tabla que muestra todas las lineas del ciclo
    alert (tabla);
}

//Calculadora con funcion

//Primero creo las variables. Luego creo la funcion de operacion. luego devolviendo y luego arrojando resultado.

//Suma

function miBotonSuma(){
    let primerNumero = Number(prompt("Ingrese numero"))
    let segundoNumero = Number(prompt("Ingrese otro numero"))
        function suma (primerNumero, segundoNumero){
            return primerNumero + segundoNumero;
        }
        let resultado = suma (primerNumero, segundoNumero);
        alert (resultado)
}

function miBotonResta(){
    let primerNumero = Number(prompt("Ingrese numero"))
    let segundoNumero = Number(prompt("Ingrese otro numero"))
        function resta (primerNumero, segundoNumero){
            return primerNumero - segundoNumero;
        }
        let resultado = resta (primerNumero, segundoNumero);
        alert (resultado)
}

function miBotonMultiplicar(){
    let primerNumero = Number(prompt("Ingrese numero"))
    let segundoNumero = Number(prompt("Ingrese otro numero"))
        function multiplicar (primerNumero, segundoNumero){
            return primerNumero * segundoNumero;
        }
        let resultado = multiplicar (primerNumero, segundoNumero);
        alert (resultado)
}

function miBotonDividir(){
    let primerNumero = Number(prompt("Ingrese numero"))
    let segundoNumero = Number(prompt("Ingrese otro numero"))
        function dividir (primerNumero, segundoNumero){
            return primerNumero / segundoNumero;
        }
        let resultado = dividir (primerNumero, segundoNumero);
        alert (resultado)
}

//calculadoras comprar

//objetos

function Calculadora (nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
}

//arrays

const carrito = [];


//funciones del boton a llamar

function sumarRosa (){
    carrito.push(new Calculadora("Calculadora Rosa",1500));
}

function sumarNegro(){
    carrito.push(new calculadora("Calculadora Negra", 1500));
}

function sumarBasica(){
    carrito.push(new calculadora("Calculadora Basica", 1000));
}

//