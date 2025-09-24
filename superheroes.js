let superHeroes = ["Ironman", "Superman", "Hawkeye"];

console.log(superHeroes);

superHeroes.push("Aquaman");
superHeroes.unshift("chuchupacabras");

console.log(superHeroes);

const usuarios = ["Erick", "Cristian", "Max", "Claudia"];

usuarios.pop();
usuarios.unshift("Maria");
usuarios.splice(2, 1);
console.log(usuarios);

if (usuarios.includes("Erick")) console.log(`hola, ${usuarios[1]}`);

const buscarusuarios = usuarios.findIndex((usuario) => usuario === "Maria");
console.log(buscarusuarios);

let actores = [
  { id: 431, nombre: "Jhonny Depp" },
  { id: 124, nombre: "Brad Pitt" },
  { id: 541, nombre: "Leonardo DiCaprio" },
  { id: 664, nombre: "Morgan Freeman" },
];

const buscaractores = actores.findIndex((actor) => actor.id === 541);
console.log(buscaractores);

actores.splice(buscaractores, 1);
console.log(actores);

const estaciones = ["Verano", "Otoño", "Invierno", "Primavera"];
estaciones.forEach((x) => console.log(x));

const valores = [100, 200, 300, 400, 500];

const nuevosValores = valores.map((x) => 2 * x);
console.log(nuevosValores);

const valoresFiltrados = nuevosValores.filter((x) => x >= 500);
console.log(valoresFiltrados);

const estudiantes = [
  { nombre: "Juan", nota: 3.4 },
  { nombre: "Laura", nota: 6 },
  { nombre: "Katherine", nota: 4.3 },
  { nombre: "Jonathan", nota: 5.4 },
];

const aprobados = estudiantes.filter((estudiante) => estudiante.nota >= 4);
console.log(aprobados);

const reprobados = estudiantes.filter((estudiante) => estudiante.nota < 4);
console.log(reprobados);

let trabajadores = [
  { nombre: "Contanza", cargo: "Chef" },
  { nombre: "Luis", cargo: "garzón" },
  { nombre: "Estefany", cargo: "Administradora" },
  { nombre: "Andrés", cargo: "Recepcionista" },
  { nombre: "Pedro", cargo: "garzón" },
  { nombre: "Felipe", cargo: "Aseo" },
  { nombre: "Maria", cargo: "garzón" },
  { nombre: "Diego", cargo: "garzón" },
];

const garzones = trabajadores.filter(
  (trabajador) => trabajador.cargo === "garzón"
);
console.log(garzones);
console.log(garzones.length);

let array1 = [1, 2, 3, 4];

let array2 = [5, 6, 7, 8];

let array3 = array1.concat(array2);

console.log(array3);

const alumnos = [
  { nombre: "Juan", nota: 3.4 },
  { nombre: "Laura", nota: 6 },
  { nombre: "Katherine", nota: 4.3 },
  { nombre: "Jonathan", nota: 5.4 },
];

const ordenados = alumnos.sort((x, y) => x.nota - y.nota);
console.log(ordenados);
