$(document).ready(function () {
  
  $("#subir").click(function () {
    var nombre = $("#nombre").val();
    var correo = $("#correo").val();
    var numero = $("#numero").val();
    var ocupacion = $("#ocupacion").val();
    var portfolio = $("#portfolio").val();
    if (nombre == "") {
      alert("El campo nombre es obligatorio.");

      return false;
    }
    else if (nombre.length < 3) {
      alert("El nombre debe tener al menos 3 caracteres.");
      
      return false;
    }
    if (correo == "") {
      alert("El campo correo es obligatorio.");

      return false;
    }
    else if (correo.length < 3) {
      alert("El correo debe tener al menos 3 caracteres.");

      return false;
    }
    if (numero == "") {
      alert("El campo numero es obligatorio.");

      return false;
    }
    if (ocupacion == "") {
      alert("El campo ocupacion es obligatorio.");

      return false;
    }
    else if (ocupacion.length < 10) {
      alert("El ocupacion debe tener al menos 10 caracteres.");

      return false;
    }
    if (portfolio == "") {
      alert("El campo portfolio es obligatorio.");

      return false;
    }
    var correoRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!correoRegex.test(correo)) {
      alert("Por favor, ingrese un correo electrónico válido.");

      return false;
    }
    alert("El formulario se envio exitosamente");
    return true;
  });
});
