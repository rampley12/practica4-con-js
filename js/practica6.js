class Libro {
  constructor(ISBN, titulo, autor, numPaginas) {
    this.ISBN = ISBN;
    this.titulo = titulo;
    this.autor = autor;
    this.numPaginas = numPaginas;
  }

  getISBN() {
    return this.ISBN;
  }

  setISBN(ISBN) {
    this.ISBN = ISBN;
  }

  getTitulo() {
    return this.titulo;
  }

  setTitulo(titulo) {
    this.titulo = titulo;
  }

  getAutor() {
    return this.autor;
  }

  setAutor(autor) {
    this.autor = autor;
  }

  getNumPaginas() {
    return this.numPaginas;
  }

  setNumPaginas(numPaginas) {
    this.numPaginas = numPaginas;
  }

  mostrarLibro() {
    return `El libro ${this.titulo} con ISBN ${this.ISBN} creado por el autor ${this.autor} tiene ${this.numPaginas} páginas.`;
  }
}

// Crear objetos libros
const libro1 = new Libro("123456789", "El Tunel", "Autor 1", 200);
const libro2 = new Libro("987654321", "prohibido suisidarce en primavera", "Autor 2", 300);

// Mostrar información de los libros
document.body.innerHTML = `
  <p>${libro1.mostrarLibro()}</p>
  <p>${libro2.mostrarLibro()}</p>
`;

// Comparar número de páginas
let libroConMasPaginas;
if (libro1.getNumPaginas() > libro2.getNumPaginas()) {
  libroConMasPaginas = libro1;
} else {
  libroConMasPaginas = libro2;
}

document.body.innerHTML += `<p>El libro con más páginas es: ${libroConMasPaginas.getTitulo()}</p>`;
