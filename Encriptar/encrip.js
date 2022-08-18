

function encriptarTexto()
{
    var cajaTexto = document.getElementById("inputTextoUno").value.toLowerCase();
    var cifrarTexto = cajaTexto.replace(/e/igm,"enter");
    var cifrarTexto = cifrarTexto.replace(/i/igm,"imes");
    var cifrarTexto = cifrarTexto.replace(/a/igm,"ai");
    var cifrarTexto = cifrarTexto.replace(/o/igm,"ober");
    var cifrarTexto = cifrarTexto.replace(/u/igm,"ufat");


    document.getElementById("txtED").innerHTML = cifrarTexto;


    if (document.formName.encR.value == '')
    {

     alert("El texto no debe estar vacio.");
     return false;


    }

    
    document.formName.action=queryString;
    document.formName.submit();
    window.close();


    
}

function desencriptarTexto()
{
    var cajaTexto = document.getElementById("inputTextoUno").value.toLowerCase();

    var cifrarTexto = cajaTexto.replace(/enter/igm,"e");
    var cifrarTexto = cifrarTexto.replace(/imes/igm,"i");
    var cifrarTexto = cifrarTexto.replace(/ai/igm,"a");
    var cifrarTexto = cifrarTexto.replace(/ober/igm,"o");
    var cifrarTexto = cifrarTexto.replace(/ufat/igm,"u");

    document.getElementById("txtED").innerHTML = cifrarTexto;
}

function limpiarTexto()
{
    var cajaDos   = document.getElementById("txtED");
    var cajaTexto = document.getElementById("inputTextoUno");
    cajaDos.innerHTML = "";

    

}



function copiarTexto()

{
    var content = document.getElementById('txtED');
    
    content.select();
    document.execCommand('copy');
}


/*
function validarPalabras(e)
{
key = e.keyCode || e.wich;
tecla = String.fromCharCode(key).toString();
letras "abcdefghijklmnopqrstuvwxyz";

especiales = [8];
tecla_especial = false
for (var i in especiales) {
if (key ==especiales[i]) {
    tecla_especial = true;
    break;
}    
}

if (letras.indexOf(telca) == -1 && !tecla_especial)
{
    alert("Ingresar solo minusculas ")
    return false;
}

}*/