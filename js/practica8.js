class Persona {
    constructor(nombre, edad, profesion) {
      this.nombre = nombre; 
      this.edad = edad;
      this.profesion = profesion;
    }
  
    saludar() {
      document.body.innerHTML += `<p>Hola, mi nombre es ${this.nombre}</p>`;
    }
  
    despedirse() {
      document.body.innerHTML += `<p>Adiós, fue un gusto conocerlos, soy ${this.nombre}</p>`; 
    }
  }
  const persona1 = new Persona("Juan", 30, "Desarrollador");
const persona2 = new Persona("Maria", 25, "Diseñadora");

persona1.saludar();
persona1.despedirse();

persona2.saludar();  
persona2.despedirse();
