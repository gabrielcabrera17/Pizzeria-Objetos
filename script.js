function pizzaOven(estilo, tipo, queso, salsa){
    var pizza = {};
    pizza.estilo = estilo;
    pizza.tipo = tipo;
    pizza.queso = queso;
    pizza.salsa = salsa;
    return pizza;
}

var pz1 = pizzaOven("Estilo chicago", "tradicional", ["mozzarella","pepperoni"], "mostaza");
var pz2 = pizzaOven("lanzada a mano" , "marinara" , ["mozzarella", "feta"],["champiñones", "aceitunas", "cebollas"]);
var pz3 = pizzaOven("Estilo Americano", "tradicional", ["mozzarella","pepperoni"], "mostaza");
var pz4 = pizzaOven("Clasica" , "marinara" , ["mozzarella", "feta"],["champiñones", "aceitunas", "cebollas"])
var pizzas = [pz1,pz2,pz3,pz4];

var indice = Math.floor(Math.random()*pizzas.length);
var indiceAleatorio = indice;
console.log(pizzas[indiceAleatorio]);
/*
var pizza1 = {
    tipoCorteza: "Gruesa",
    tipoSalsa: "Tradicional",
    quesos: "Mozzarella",
    salsas: "cebollas",
    mostrar: function(){
        console.log("tipoCorteza:" + this.tipoCorteza);
        console.log("tipoSalsa: "+this.tipoSalsa);
        console.log("quesos: "+this.quesos);
        console.log("cebollas: "+this.salsas);
    }
}
pizza.mostrar();
*/