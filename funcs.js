function enviarForm() {
  var nombre = document.getElementById("nombre").value;

  var correo = document.getElementById("correo").value;

  var numero = document.getElementById("numero").value;

  var ocupacion = document.getElementById("ocupacion").value;

  var portfolio = document.getElementById("portfolio").value;

  if (nombre === "") {
    alert("El campo nombre es obligatorio.");

    return false;
  } else if (nombre.length < 3) {
    alert("El nombre debe tener al menos 3 caracteres.");

    return false;
  }

  if (correo === "") {
    alert("El campo correo es obligatorio.");

    return false;
  } else if (correo.length < 3) {
    alert("El correo debe tener al menos 3 caracteres.");

    return false;
  }

  if (numero === "") {
    alert("El campo número es obligatorio.");

    return false;
  } else if (numero.length < 3) {
    alert("El número debe tener al menos 3 caracteres.");

    return false;
  }

  if (ocupacion === "") {
    alert("El campo ocupación es obligatorio.");

    return false;
  }

  var correoRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if (!correoRegex.test(correo)) {
    alert("Por favor, ingrese un correo electrónico válido.");

    return false;
  }

  alert("El formulario se envio exitosamente");
  return true;
}
