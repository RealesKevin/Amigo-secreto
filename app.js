// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos=[];
const emojis = ["😄", "😂",  "🤪",  "😜", "🤗",  "💥", "🌟", "🎉", "🍕", "🎈", "🐱", "🌵", "🍀", "🚀"];

function agregarAmigo() {
    //captura el valor del campo de entrada
    let nombre= document.getElementById("amigo").value.toLowerCase().trim().replace(/\s+/g, ' ');
    
    let nombreCapitalizado = capitalizarNombre(nombre);

    //verifica la entrada
    if( nombre.length > 0) {

        let existe= amigos.some(amigo=> amigo.split(" ").slice(0,-1).join(" ").toLowerCase() === nombre.toLowerCase());

        if (existe) {
            alert("Por favor, ingrese otro nombre; el nombre ya existe.");
        } else {
            let emojiAleatorio= emojis[Math.floor(Math.random() * emojis.length)];
            amigos.push(nombreCapitalizado + " " + emojiAleatorio);

            //actualiza el array de amigos
            actualizaLista();
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

function actualizaLista() {
    let lista= document.getElementById("listaAmigos");
    lista.innerHTML= "";

    for(let amigo of amigos) {
        let li= document.createElement("li");
        
        // Establece el texto del <li> como el nombre del amigo (ya capitalizado y con emoji)
        li.textContent = amigo

        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("¡Vamos! Agrega algunos amigos primero y luego podremos hacer el sorteo.");
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