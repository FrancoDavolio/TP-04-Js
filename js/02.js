// let cuenta ={
//     titular: 'Alex',
//     saldo: 0,
//     ingresar(montoIngresar){
//         //toda la logica para ingresar dinero
//         this.saldo += montoIngresar //  this.saldo=  this.saldo+ montoIngresar;
//     },
//     extraer(montoExtraer){
//         //toda la logica para extraer dinero de la cuenta
//         if(this.saldo >= montoExtraer){
//             this.saldo -= montoExtraer; // this.saldo = this.saldo - montoExtraer
//         }else{
//             alert('Fondos insuficientes');
//         }
//     },
//     informar(){
//         console.log(this);
//         document.write(`<p>La cuenta del usuario: ${this.titular}, contiene un saldo de $${this.saldo}</p>`)
//     }
// }

// cuenta.titular
// //invocar metodo informar
// cuenta.informar();

// let deposito = parseFloat(prompt('Ingrese un monto'));
// cuenta.ingresar(deposito);

// cuenta.informar();

// let montoExtraer = parseFloat(prompt('Ingrese un monto a retirar'));
// cuenta.extraer(montoExtraer);

// cuenta.informar();


class Cuenta {
  constructor(usuario, saldo) {
    this.usuario = nombreCompleto;
    this.saldo = 0;
  }
  interfaz() {
    switch (opcion) {
      case "1":
        let montoIngresar = parseFloat(prompt("Ingresar un monto"));
        this.saldo += montoIngresar;
        document.write("Su saldo es:$" + this.saldo);
        break;
      case "2":
        let montoExtraer = parseFloat(prompt("Ingrese un monto a retirar"));
        if (this.saldo >= montoExtraer) {
          this.saldo -= montoExtraer;
        } else {
          alert("Fondos insuficientes");
        }
        break;
      case "3":
        document.write(
          "<p>La cuenta del usuario:" +
            this.usuario +
            ", contiene un saldo de $" +
            this.saldo
        );
        break;
      default:
        document.write("El numero ingresado es erroneo.");
        break;
    }
  }
}

let opcion = prompt(
    "Ingrese: 1-Si quiere ingresar plata a la cuenta.  2-Si quiere extraer plata de la cuenta.  3-Info de la cuenta."
  );

