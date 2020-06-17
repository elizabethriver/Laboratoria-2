const rA1 = "a";
const rA2 = " c";
const rA3 = " c";
const respuestas_comp_TriviaA = ["pregunta 1: " + rA1, "pregunta 2: " + rA2, "pregunta 3: " + rA3];
const rB1 ="b";
const rB2 = " c";
const rB3 = " a";
const respuestas_comp_TriviaB = ["pregunta 1: " + rB1, "pregunta 2: " + rB2, "pregunta 3: " + rB3];

document.getElementById("Mensaje_respuestas_correctas").innerHTML = "Las respuestas correctas son: ";

document.getElementById("respuesta_correctaA").innerHTML = respuestas_comp_TriviaA.join('<br>');

document.getElementById("respuesta_correctaB").innerHTML = respuestas_comp_TriviaB.join('<br>');

let respuesta_