function saludar() {
  var name = localStorage.getItem("name");
  document.getElementById("saludo").innerHTML += name+"?";
}
saludar();

