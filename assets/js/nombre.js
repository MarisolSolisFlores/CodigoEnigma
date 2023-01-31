function guardarNombre(){
  var nombre=document.getElementById("nombre").value;
  localStorage.setItem("name",nombre);
}
