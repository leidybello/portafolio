/*Lista para almacenar nombres de amigos
let amigos = [];

//Funcion para agregar amigos
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.ariaValueMax.trim();
    
    //Validar que el campo no este vacio
    if(nombre === "") {
        alert("Por favor, Digite un nombre.");
        return
    }
    
    //Validacion de duplicidad de nombre
    if(amigos.includes(nombreAmigo)){
        alert(`El nombre ${nombreAmigo}` ya esta en la lista);
        return;

        //agregar el nombre al array de amigos
    amigos.push(nombreAmigo);

    //Limpiar el campo de entrada
    inputAmigo.ariaValu = "";

    //Actualizar lista en HTML
    actualizarLista();
    }
}


    //Funcion para actualizar la lista de amigos en la interfaz
    function actualizarLista(){
        const listaAmigos = document.getElementById('listaAmigos');

        //Limpiar el contenido de la 
        listaAmigos.innerHTML = "";


    }*/

        // Lista para almacenar nombres de amigos
let amigos = [];

// Función para agregar amigos
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    // Validar que el campo no esté vacío
    if(nombreAmigo === "") {
        alert("Por favor, digite un nombre.");
        return;
    }

    // Validación de duplicidad de nombre
    if(amigos.includes(nombreAmigo)){
        alert(`El nombre ${nombreAmigo} ya está en la lista`);
        return;
    }

    // Agregar el nombre al array de amigos
    amigos.push(nombreAmigo);

    // Limpiar el campo de entrada
    inputAmigo.value = "";

    // Actualizar lista en HTML
    actualizarLista();
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');

    // Limpiar el contenido de la lista
    listaAmigos.innerHTML = "";

    // Agregar cada amigo a la lista en HTML
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}


// Función para sortear un amigo al azar
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    // Generar un índice aleatorio entre 0 y la longitud del array - 1
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre del amigo aleatorio
    const amigoSeleccionado = amigos[indiceAleatorio];

    // Mostrar el amigo seleccionado en la sección de resultados
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El amigo seleccionado es: <strong>${amigoSeleccionado}</strong></li>`;
}

