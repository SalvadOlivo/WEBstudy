//variables para operaciones
var num1, num2, operacion;

function init(){
    //obteniendo pantalla de resultados
    var resultado = documento.getElementById("resultado");
    var reset = documento.getElementById("C");
    var suma = documento.getElementById("suma");
    var resta = documento.getElementById("resta");
    var multiplicacion = documento.getElementById("multiplicacion");
    var division = documento.getElementById("division");
    var igual = documento.getElementById("igual");
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve= document.getElementById("nueve");
    var cerp = document.getElementById("cero");
}
//eventos
uno.onclick = Function(e){
    resultado.TextContent = resultado.TextContent + "1";

}
dos.onclick = Function(e){
    resultado.TextContent = resultado.TextContent + "2";
    
    }
tres.onclick = function(e){
    resultado.TextContent = resultado.textContent + "3";

}
cuatro.onclick = function(e){
    resultado.TextContent = resultado.textContent + "4";

}
cinco.onclick = function(e){
    resultado.TextContent = resultado.textContent + "5";

}
seis.onclick = function(e){
    resultado.TextContent = resultado.textContent + "6";

}
siete.onclick = function(e){
    resultado.TextContent = resultado.textContent + "7";

}
ocho.onclick = function(e){
    resultado.TextContent = resultado.textContent + "8";

}
nueve.onclick = function(e){
    resultado.TextContent = resultado.textContent + "9";

}
cero.onclick = function(e){
    resultado.TextContent = resultado.textContent + "0";

};
//eventos operaciones
reset.onclick = {
    resetear();

}
igual.onclick = function{
    num2 = resultado.textContent;
    resolver();
}

suma.onclick = function{
    num1 = resultado.textContent;
    operacion = "+";
    limpiar();

}
resta.onclick = function{
    num1 = resultado.textContent;
    operacion = "-";
    limpiar();

}
multiplicacion.onclick = function {
    num1 = resultado.textContent;
    operacion = "*";
    limpiar();

}
division.onclick = function{
    num1 = resultado.textContent;
    operacion = "/";
    limpiar();

}

function resetear(){
    resultado.textContent = "";

}

function resetear(){
    resultado.textContent = "";
    num1 = 0;
    num2 = 0;
    operacion = "";
};

function resolver(){
    var res = 0;
    switch(operacion){
        case "+";
        res = parseFloat(num1) + parseFloat(num2)





    }


}