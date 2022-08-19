const nombre = "Eduardo"; // Tipo de variable string
const apellidos = "Reyes"; // Tipo de variable string
const platziUser = "Joeduardoreyes" ; // Tipo de variable string
const edad = 23 ; // Tipo de variable number
const email = "Joeduardoreyes@outlook.com" ; // Tipo de variable string
const mayorDeEdad = true ; // Tipo de variable boolean
const savings = 34000; // Tipo de variable number
const debts = 4000; // Tipo de variable number

const fullName = nombre + " " + apellidos;
const effective = savings - debts;

const nickname = "Playes";

function presentacion(nombre, nickname) {
    console.log("Mi nombre es " + nombre + ", pero prefiero que me digas " + nickname + ".");
}

presentacion(fullName, nickname);

// Condionales

const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
  case "Free":
    console.log("Solo puedes tomar los cursos gratis");
    break;
  case "Basic":
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    break;
  case "Expert":
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    break;
  case "ExpertPlus":
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
    break;
}

function identificarSuscripcion(s) {
  if (s == "Free") {
    console.log("Solo puedes tomar los cursos gratis")
  } else if (s == "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
  } else if (s == "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
  } else if (s == "ExpertPlus") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
  }
}
identificarSuscripcion(tipoDeSuscripcion);