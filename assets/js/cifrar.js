function encriptar() {
  passSistema = "0693";
  msgError = "Error en la contraseña, vuelve a intentarlo";
  var mensaje = document.getElementById("msg").value;
  var password = document.getElementById("pass").value;
  //alert(mensaje +"+"+password)
  if (passSistema == password) {
    //alert("Contraseña correcta");
    document.getElementById("error").innerHTML = "";
    var encryted = btoa(mensaje);
    //alert("encryted")
    document.getElementById("demo1").value = encryted;
  } else {
    //alert("error");
    document.getElementById("error").innerHTML = msgError;
  }
}
        function copiarAlPortapapeles() {
          let texto = document.getElementById('demo1');
          texto.select();
          texto.setSelectionRange(0, 99999);
          document.execCommand('copy');
          alert("Copiado!")
        }