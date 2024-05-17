$(document).ready(function () {
  $("#subir").click(function () {
    var nombre = $("#nombre").val();
    var correo = $("#correo").val();
    var numero = $("#numero").val();
    var ocupacion = $("#ocupacion").val();

    // Validación del campo nombre
    if (nombre.trim() == "") {
      alert("El campo nombre es obligatorio.");
      return false;
    } else if (nombre.length < 3) {
      alert("El nombre debe tener al menos 3 caracteres.");
      return false;
    }

    // Validación del campo correo
    if (correo.trim() == "") {
      alert("El campo correo es obligatorio.");
      return false;
    } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(correo)) {
      alert("Por favor, ingrese un correo electrónico válido.");
      return false;
    }

    // Validación del campo número
    if (numero.trim() == "") {
      alert("El campo número es obligatorio.");
      return false;
    } else if (numero.length < 3) {
      alert("El número debe tener al menos 3 dígitos.");
      return false;
    }

    // Validación del campo ocupación
    if (ocupacion.trim() == "") {
      alert("El campo ocupación es obligatorio.");
      return false;
    } else if (ocupacion.length < 10) {
      alert("La ocupación debe tener al menos 10 caracteres.");
      return false;
    }

    // Si todas las validaciones son exitosas, se muestra un mensaje de éxito
    alert("El formulario se envió exitosamente");
    return true;
  });
});
