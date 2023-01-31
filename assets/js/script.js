function guardarNombre() {
  var nombre = document.getElementById("nombre").value;
  if (nombre == "") {
    alert("⚠️ ERROR ⚠️ Al parecer no introduciste tu nombre, es obligatorio hacerlo. Intenta de nuevo 😊")
  } else {
    localStorage.setItem("name", nombre);
    console.log(nombre);
    document.getElementById("usuario").href = "bienvenida.html"
  }
}

