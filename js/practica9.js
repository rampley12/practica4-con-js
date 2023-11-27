class Animal {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    emitirSonido() {
      return "El animal emite un sonido.";
    }
  }
  
  class Perro extends Animal {
    emitirSonido() {
      return "El perro ladra: ¡Guau, guau!";
    }
  }
  
  class Gato extends Animal {
    emitirSonido() {
      return "El gato maulla: ¡Miau, miau!";
    }
  }
  
  const perro = new Perro("Firulais", 3);
  const gato = new Gato("Pelusa", 2);
  
  document.body.innerHTML += `<p>${perro.emitirSonido()}</p>`;
  document.body.innerHTML += `<p>${gato.emitirSonido()}</p>`;
  