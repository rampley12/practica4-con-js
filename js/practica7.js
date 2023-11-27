class Contacto {
    constructor(nombre, telefono) {
      this.nombre = nombre;
      this.telefono = telefono;
    }
  }
  
  class Agenda {
    constructor(tamano = 10) {
      this.contactos = [];
      this.tamano = tamano;
    }
  
    aniadirContacto(contacto) {
      if (this.contactos.length < this.tamano) {
        this.contactos.push(contacto);
        document.body.innerHTML += `<p>Contacto añadido a la agenda.</p>`;
      } else {
        document.body.innerHTML += `<p>La agenda está llena, no se puede añadir más contactos.</p>`;
      }
    }
  
    existeContacto(contacto) {
      return this.contactos.some((c) => c.nombre === contacto.nombre);
    }
  
    listarContactos() {
      this.contactos.forEach((contacto) => {
        document.body.innerHTML += `<p>Nombre: ${contacto.nombre}, Teléfono: ${contacto.telefono}</p>`;
      });
    }
  
    buscarContacto(nombre) {
      const contactoEncontrado = this.contactos.find((contacto) => contacto.nombre === nombre);
      if (contactoEncontrado) {
        document.body.innerHTML += `<p>Teléfono de ${contactoEncontrado.nombre}: ${contactoEncontrado.telefono}</p>`;
      } else {
        document.body.innerHTML += `<p>No se encontró ningún contacto con el nombre ${nombre}.</p>`;
      }
    }
  
    eliminarContacto(contacto) {
      const indice = this.contactos.findIndex((c) => c.nombre === contacto.nombre);
      if (indice !== -1) {
        this.contactos.splice(indice, 1);
        document.body.innerHTML += `<p>Contacto eliminado de la agenda.</p>`;
      } else {
        document.body.innerHTML += `<p>No se encontró ningún contacto con ese nombre en la agenda.</p>`;
      }
    }
  
    agendaLlena() {
      return this.contactos.length === this.tamano;
    }
  
    huecosLibres() {
      return this.tamano - this.contactos.length;
    }
  }
  
  // Crear una instancia de la agenda
  const agenda = new Agenda();
  
  // Función para mostrar el menú y realizar las operaciones
  function mostrarMenu() {
    const opcion = prompt(`Seleccione una opción:
    1. Añadir contacto
    2. Comprobar si existe un contacto
    3. Listar contactos
    4. Buscar contacto por nombre
    5. Eliminar contacto
    6. Comprobar si la agenda está llena
    7. Mostrar huecos libres
    8. Salir`);
  
    switch (opcion) {
      case "1":
        const nombre = prompt("Ingrese el nombre del contacto:");
        const telefono = prompt("Ingrese el teléfono del contacto:");
        const nuevoContacto = new Contacto(nombre, telefono);
        agenda.aniadirContacto(nuevoContacto);
        break;
      case "2":
        const nombreExiste = prompt("Ingrese el nombre del contacto a comprobar:");
        const contactoExiste = new Contacto(nombreExiste);
        const existe = agenda.existeContacto(contactoExiste);
        document.body.innerHTML += `<p>El contacto ${nombreExiste} ${existe ? "existe" : "no existe"} en la agenda.</p>`;
        break;
      case "3":
        agenda.listarContactos();
        break;
      case "4":
        const nombreBuscar = prompt("Ingrese el nombre del contacto a buscar:");
        agenda.buscarContacto(nombreBuscar);
        break;
      case "5":
        const nombreEliminar = prompt("Ingrese el nombre del contacto a eliminar:");
        const contactoEliminar = new Contacto(nombreEliminar);
        agenda.eliminarContacto(contactoEliminar);
        break;
      case "6":
        document.body.innerHTML += `<p>La agenda ${agenda.agendaLlena() ? "está llena" : "no está llena"}.</p>`;
        break;
      case "7":
        document.body.innerHTML += `<p>Huecos libres en la agenda: ${agenda.huecosLibres()}</p>`;
        break;
      case "8":
        return;
      default:
        document.body.innerHTML += `<p>Opción inválida.</p>`;
        break;
    }
  
    mostrarMenu();
  }
  
  // Mostrar el menú inicial
  mostrarMenu();
  