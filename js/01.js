let auto = {
    //Propiedades
    color: "azul",
    marca: "toyota", 
    modelo: "yaris",
    estado: prompt("Escriba ENCENDER para prender el auto y APAGAR para apagarlo."),

    //Metodos
    mostrarAuto: function(){
        document.write("<h3>Caracteristicas del auto:</h3><ul><li>"+this.color+"</li><li>"+this.marca+"</li><li>"+this.modelo+"</li></ul>")
    },
    prender: function (){
        if (this.estado.toLocaleLowerCase() === "encender") {
            document.write("El auto esta encendido.")
        }else{
            document.write("El auto esta apagado.")
        }
    }
}

auto.mostrarAuto();
auto.prender();