// Creamos un arreglo vacío para guardar los amigos
let amigos = ["Jose Carlos","Santiago","Norma","Raúl","Ximena","Lorenzo"];

console.log("Lista inicial de amigos:", amigos);


function agregarAmigo() {
  
  let input = document.getElementById("amigo");
  let nombre = input.value;

  
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  amigos.push(nombre);

  let lista = document.getElementById("listaAmigos");
  let item = document.createElement("li");
  item.textContent = nombre;
  lista.appendChild(item);

  
  input.value = "";
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No hay amigos para sortear.");
    return;
  }

  let numero = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[numero];

  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "<li>El amigo secreto es: " + amigoSorteado + "</li>";

  console.log("Amigo sorteado:", amigoSorteado);

}





