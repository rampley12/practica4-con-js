// Definir la clase Auto
class Auto {
    constructor(color, marca, modelo) {
      this.color = color;
      this.marca = marca;
      this.modelo = modelo;
      this.encendido = false;
    }
  
    // Método para encender el auto
    encender() {
      this.encendido = true;
      console.log("El auto está encendido");
    }
  
    // Método para apagar el auto
    apagar() {
      this.encendido = false;
      console.log("El auto se apagó");
    }
  }
  
  // Crear una instancia del objeto Auto
  const miAuto = new Auto("rojo", "Toyota", "Corolla");
  
  // Encender el auto
  miAuto.encender();
  
  // Apagar el auto
  miAuto.apagar();
  