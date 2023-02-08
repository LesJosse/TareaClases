class Estudiante {
  constructor(nombre, asignaturas = []) {
    this.nombre = nombre;
    this.asignaturas = asignaturas;
  }
  obtenerDatos() {
    const propiedades = { nombre: this.nombre, asignaturas: this.asignaturas };
    console.log(propiedades);
  }
}

const estudiante1 = new Estudiante("Jose Luis", ["Javascript, HTML, CSS"]);
estudiante1.obtenerDatos();
// console.log(estudiante1);
