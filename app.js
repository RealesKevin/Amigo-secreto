// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos=[];
const emojis = ["😄", "😂",  "🤪",  "😜", "🤗",  "💥", "🌟", "🎉", "🍕", "🎈", "🐱", "🌵", "🍀", "🚀"];

function agregarAmigo() {
    //captura el valor del campo de entrada
    let nombre= document.getElementById("amigo").value.toLowerCase().trim().replace(/\s+/g, ' ');
    
    let nombreCapitalizado = capitalizarNombre(nombre);

    //verifica la entrada
    if( nombre.length > 0) {
        let nombreConCaracter=false;

        //verificamos que solo contenga letras
        for(let letra of nombre) {
            // Si la letra no es una letra (es un número o símbolo)
            if((letra.toLowerCase() === letra.toUpperCase() && letra !== ' ')) {
                nombreConCaracter=true;
                break;
            }
        }

        //Si el nombre contiene un cáracter no permitido
        if( nombreConCaracter){
            alert("No se permiten caracteres especiales o números en el nombre.");
        } else {
            let existe= amigos.some(amigo=> amigo.split(" ").slice(0,-1).join(" ").toLowerCase() === nombre.toLowerCase());

            if (existe) {
                alert("Este nombre ya está en la lista. Por favor, ingresa uno diferente.")
            } else {
                //asigna un emoji aleatorio
                let emojiAleatorio= emojis[Math.floor(Math.random() * emojis.length)];

                amigos.push(nombreCapitalizado + " " + emojiAleatorio);

                //actualizar el array de amigos
                actualizaLista()
            }
        }
    } else {
        alert("Por favor, ingresa un nombre antes de continuar.");
    }

    //limpiar el campo de entrada
    limpiarEntrada();
}

function limpiarEntrada() {
    document.getElementById("amigo").value = "";
}

function actualizaLista() {
    let lista= document.getElementById("listaAmigos");
    lista.innerHTML= "";

    for(let amigo of amigos) {
        let li= document.createElement("li");
        
        li.textContent = amigo

        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("¡Vamos! Agrega al menos dos nombres para poder realizar el sorteo.");
    } else {
        let indiceAleatorio= Math.floor(Math.random() * amigos.length);
        let amigoSecreto= amigos[indiceAleatorio];

        let resultado= document.getElementById("resultado");
        resultado.innerHTML = `El amigo secreto sorteado es: ${amigoSecreto}`;
    }
}

function borrarLista() {
    amigos=[];
    actualizaLista();
    let resultado= document.getElementById("resultado");
    resultado.innerHTML="";
}

function capitalizarNombre(nombre) {
    // Divide el nombre en palabras, capitaliza cada una y luego las une de nuevo
    return nombre.split(" ").map( palabra => {
        return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    }).join(" ");

}

document.getElementById("amigo").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
});

