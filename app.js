// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos=[];

function agregarAmigo() {
    //captura el valor del campo de entrada
    let nombre= document.getElementById("amigo").value;

    //verifica la entrada
    if( nombre.length > 0) {
        if (amigos.includes(nombre)) {
            alert("Por favor, ingrese otro nombre; el nombre ya existe.")
        } else {
            //actualiza el array de amigos
            amigos.push(nombre)
        }
    } else {
        alert("Por favor, inserte un nombre.");
    }
    //limpiar el campo de entrada
    limpiarEntrada();
}

function limpiarEntrada() {
    document.getElementById("amigo").value = "";
}

