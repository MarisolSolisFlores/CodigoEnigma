function desencriptar() {
  var mensajeCodigo = document.getElementById("msgCodigo").value;
  var decrypted = atob(mensajeCodigo);
  document.getElementById("demo2").innerHTML = decrypted;
}