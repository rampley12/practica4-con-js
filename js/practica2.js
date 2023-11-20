// Definir clase Cuenta
class Cuenta {
  constructor(titular) {
    this.titular = titular;
    this.saldo = 0;
  }

  ingresar(cantidad) {
    this.saldo += cantidad;
  }

  extraer(cantidad) {
    if (cantidad <= this.saldo) {
      this.saldo -= cantidad;
    } else {
      alert("No hay suficiente saldo en la cuenta.");
    }
  }

  informar() {
    alert("Titular: " + this.titular + "\nSaldo: " + this.saldo);
  }
}

// Crear objeto cuenta con titular "Alex"
const cuenta = new Cuenta("Alex");

// Mostrar descripción inicial
cuenta.informar();

// Ingresar dinero a la cuenta
const cantidadIngresar = prompt("Ingrese la cantidad a depositar:");
cuenta.ingresar(parseFloat(cantidadIngresar));

// Mostrar descripción después de ingresar dinero
cuenta.informar();

// Extraer dinero de la cuenta
const cantidadExtraer = prompt("Ingrese la cantidad a retirar:");
cuenta.extraer(parseFloat(cantidadExtraer));

// Mostrar descripción después de extraer dinero
cuenta.informar();
