console.log("hola chicas")
//console.log() método que te va a permitir visualizar algo
// DECLARACION DE VARIABLES, las variables contiene si declaracion, con const y let, un identificador, que es el nombre, un operador y el contenido.
//no declarar identificadores con palabras reservadas como true y false
//usar identificadores que expresen las variables
//CONST, viene de constante, no lo puedo volver a declarar, valor cte

const nombre = "Mariana"
console.log (nombre)
console.log ("nombre")
const mascotalucia = "Frodo"
const mascotakarina = "Pirata"
const mascotaeve = "Gastón"

//LET

let edad = 22
console.log (edad)
edad = 23
console.log (edad)
//VAR
var colorfavorito = "turquesa"

// DATOS EN JAVASCRIPT

//Number --> los números, 
//dos tipos: enteros y flotantes (con coma)
20
30.5
1253512.55532215
//string
//cadena de caracteres, deben llevar comillas
//dato que representa palabras
//comillas dobles, simples o backtics
let soyProfesora
let respuesta = "si"
soyProfesora = respuesta
console.log (respuesta)
//lo de arriba, no se hace porque es absudo

//Booleano
//son tipos de datos que se refieren a la lógica
//a traves de true y false
true
false

// Operadores aritméticos
5 + 5
10 - 10000
10 * 5
72 / 8
const divisionEntreNumeros = 10 / 5
const divisionDeEdad = edad / divisionEntreNumeros
console.log (divisionDeEdad)
//tambien se puede dividir dentro de console.log

//Concatenacion
console.log(mascotaeve + "y" + mascotakarina)

//Cuadros de dialogo
//son cuadros de dialigo, nativos de navegador, que se utilizan para enviar mensajes a los usuarios
//prompt
//es un cadro que te permite ingresar un dato (antes de cargar el html)
prompt("ingrese su edad")
const edadDelUsuario = prompt("ingrese su edad")
console.log(edadDelUsuario)
//alert
alert("ALERTA")