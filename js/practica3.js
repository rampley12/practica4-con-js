class Rectangulo {
    constructor(alto, ancho) {
      this.alto = alto;
      this.ancho = ancho;
    }
  
    modificarPropiedades(alto, ancho) {
      this.alto = alto;
      this.ancho = ancho;
    }
  
    mostrarPropiedades() {
      document.body.innerHTML += `<p>Alto: ${this.alto}</p>`;
      document.body.innerHTML += `<p>Ancho: ${this.ancho}</p>`;
    }
  
    calcularPerimetro() {
      const perimetro = 2 * (this.alto + this.ancho);
      document.body.innerHTML += `<p>Perímetro: ${perimetro}</p>`;
    }
  
    calcularArea() {
      const area = this.alto * this.ancho;
      document.body.innerHTML += `<p>Área: ${area}</p>`;
    }
  }
  
  // Crear objeto rectángulo con dimensiones aleatorias
  const altoAleatorio = Math.floor(Math.random() * 10) + 1;
  const anchoAleatorio = Math.floor(Math.random() * 10) + 1;
  const rectangulo = new Rectangulo(altoAleatorio, anchoAleatorio);
  
  // Mostrar propiedades del rectángulo
  rectangulo.mostrarPropiedades();
  
  // Modificar propiedades del rectángulo con nuevas dimensiones aleatorias
  const nuevoAltoAleatorio = Math.floor(Math.random() * 10) + 1;
  const nuevoAnchoAleatorio = Math.floor(Math.random() * 10) + 1;
  rectangulo.modificarPropiedades(nuevoAltoAleatorio, nuevoAnchoAleatorio);
  
  // Mostrar propiedades actualizadas del rectángulo
  rectangulo.mostrarPropiedades();
  
  // Calcular perímetro del rectángulo
  rectangulo.calcularPerimetro();
  
  // Calcular área del rectángulo
  rectangulo.calcularArea();
  