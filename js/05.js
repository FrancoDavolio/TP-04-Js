let añoActual = 2022;

class Persona {
  constructor(nombre, edad, dni, sexo, peso, altura, añoNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.añoNacimiento = añoNacimiento;
  }
  mostrarGeneracion() {
    switch (true) {
      case (this.añoNacimiento>=1994 && this.añoNacimiento<=2010):
        document.write(
          "<p>Pertenece a la Generacion Z, su rasgo caracteristico es: Expancion masiva de Internet.</p>"
        );
        break;
      case (this.añoNacimiento>=1981 && this.añoNacimiento<=1993):
        document.write(
          "<p>Pertenece a la Generacion Y, su rasgo caracteristico es: Inicio de la digilitacion.</p>"
        );
        break;
      case (this.añoNacimiento>=1969 && this.añoNacimiento<=1980):
        document.write(
          "<p>Pertenece a la Generacion X, su rasgo caracteristico es: Crisis del 73 y transicion española.</p>"
        );
        break;
      case (this.añoNacimiento>=1949 && this.añoNacimiento<=1968):
        document.write(
          "<p>Pertenece a la Generacion  Baby Boom, su rasgo caracteristico es: Paz y explosion demografica.</p>"
        );
        break;
      case (this.añoNacimiento>=1930 && this.añoNacimiento<=1948):
        document.write(
          "<p>Pertenece a la Generacion Silent Generation, su rasgo caracteristico es: Conflictos belicos.</p>"
        );
        break;

      default:
        document.write("<p>Año ingresado Muy viejo o muy joven jajaja.</p>");
        break;
    }
  }
  esMayorDeEdad() {
    let resta = añoActual - this.añoNacimiento;
    if (resta >= 18) {
        document.write("<p>Es mayor de edad</p>")
    }else{
        document.write("<p>Es menor de edad</p>")
    }
  }
  mostrarDatos (){
    document.write(`
    <ul>
        <li>Nombre: ${this.nombre}</li>
        <li>Email: ${this.edad}</li>
        <li>DNI: ${this.dni}</li>
        <li>Sexo: ${this.sexo}</li>
        <li>Peso: ${this.peso}</li>
        <li>Altura: ${this.altura}</li>
        <li>Año de Nacimiento: ${this.añoNacimiento}</li>
    </ul>`);
  }
  generaDNI(){
    
    this.dni = Math.round(Math.random() * (100000000 - 9999999) + 9999999);

    document.write(`<p>DNI: ${this.dni} <p/>`);
  }
}

let franco = new Persona(
    "Franco",
    "21",
    this.dni,
    "H",
    100+"kg",
    178+"cm",
    2001
);

franco.esMayorDeEdad();
franco.generaDNI();
franco.mostrarDatos();
franco.mostrarGeneracion();