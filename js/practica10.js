class Aeropuerto {
    constructor(nombreAeropuerto) {
      this.nombreAeropuerto = nombreAeropuerto;
      this.listaAviones = [];
    }
  
    agregarAvion(avion) {
      this.listaAviones.push(avion);
    }
  
    buscarAvion(nombreAvion) {
      const avionEncontrado = this.listaAviones.find((avion) => avion.nombre === nombreAvion);
      if (avionEncontrado) {
        return `Información del avión ${avionEncontrado.nombre}: Capacidad: ${avionEncontrado.capacidad}, Destino: ${avionEncontrado.destino}`;
      } else {
        return `No se encontró ningún avión con el nombre ${nombreAvion}.`;
      }
    }
  }
  
  class Avion {
    constructor(nombre, capacidad, destino) {
      this.nombre = nombre;
      this.capacidad = capacidad;
      this.destino = destino;
      this.listaPasajeros = [];
    }
  
    abordar(pasajero) {
      if (this.listaPasajeros.length < this.capacidad) {
        this.listaPasajeros.push(pasajero);
        return `El pasajero ${pasajero} ha abordado el avión ${this.nombre}.`;
      } else {
        return `El avión ${this.nombre} está lleno. No se puede abordar.`;
      }
    }
  }
  
  const aeropuerto = new Aeropuerto("Aeropuerto Internacional");
  
  const avion1 = new Avion("Avión 1", 100, "Destino 1");
  const avion2 = new Avion("Avión 2", 150, "Destino 2");
  const avion3 = new Avion("Avión 3", 200, "Destino 3");
  
  aeropuerto.agregarAvion(avion1);
  aeropuerto.agregarAvion(avion2);
  aeropuerto.agregarAvion(avion3);
  
  const nombreAvionABuscar = "Avión 2";
  const informacionAvion = aeropuerto.buscarAvion(nombreAvionABuscar);
  const mensajeAbordar = avion2.abordar("Pasajero 1");
  
  document.body.innerHTML += `<p>${informacionAvion}</p>`;
  document.body.innerHTML += `<p>${mensajeAbordar}</p>`;
  