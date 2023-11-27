class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }

  imprimeDatos() {
    document.body.innerHTML += "<p>Código: " + this.codigo + "</p>";
    document.body.innerHTML += "<p>Nombre: " + this.nombre + "</p>";
    document.body.innerHTML += "<p>Precio: " + this.precio + "</p>";
    document.body.innerHTML += "<br>";
  }
}
const producto1 = new Producto(520364, "manzana ", 10.99);
const producto2 = new Producto(216555, "Pera", 19.99);
const producto3 = new Producto(351519, "Banana ", 5.99);

const productos = [producto1, producto2, producto3];
productos.forEach(producto => {
  producto.imprimeDatos();
});
