class Rectangulo {
    constructor ( height = 0, width = 0 ) {
      this._height = height;
      this._width = width;
    }

    set cambiarHeight( valor ) {
      this._height = valor;
    }
  
    set cambiarWidth ( valor = 0 ) {
      this._width = valor;
    }
    
    get perimetro(){
        document.write(("<p>" + (this._height * 2 + this._width * 2) +"</p>"));
    }

    get area() {
      document.write("<p>"+this._height * this._width +"</p>");
    }
  }
  
  let obj = new Rectangulo();

obj.cambiarHeight = 20;
obj.cambiarWidth = 20;
obj.area;
obj.perimetro;