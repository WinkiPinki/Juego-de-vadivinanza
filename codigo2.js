let numeroSecreto = generarNumeroSecreto();
let intentos = 1;
function asignarTexto(elemento, texto)
{
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento()
{
     let intentoUsuario = parseInt(document.getElementById('ValorUsuario').value);

     if(intentoUsuario === numeroSecreto){
        asignarTexto('p',`Acertaste el numero en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}`);
        document.getElementById('reintentar').removeAttribute('disabled');
     }
     else{
        if(intentoUsuario > numeroSecreto){
            asignarTexto('p','El numero es menor');
        }
        else{
            asignarTexto('p','El numero es mayor');
        }
        intentos ++;
        limpiarCaja();
     }
     return;
}

asignarTexto('h1','Juego de adivinanza!');
asignarTexto('p','Escoge un numero del 1 al 100');

function generarNumeroSecreto()
{
    return Math.floor(Math.random()*10)+1;
}

function limpiarCaja(){

    document.querySelector('#ValorUsuario').value = '';
}