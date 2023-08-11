function validarCampos() {
      // Obtener referencias a los campos de entrada
      var nombre = document.getElementById("nombre");
      var apellidos = document.getElementById("apellidos");
      var correo = document.getElementById("correo");
      var contra = document.getElementById("contra");

      // Verificar si los campos están vacíos
      if (nombre.value === '' || apellidos.value === '' || correo.value === '' || contra.value === ''  ) {
        // Mostrar mensaje de error
        alert("CAMPOS VACIOS");
        nombre.value = '';
        correo.value = '';
        contra.value = '';
        barraCarga.value = '';
        
      } else {
        // Todos los campos están completos, enviar formulario
        alert("REGISTRO CORRECTO");
        nombre.value = '';
        correo.value = '';
        contra.value = '';
        barraCarga.value = '';
      }
      
};


function eliminarCampos() {
      // Obtener referencias a los campos de entrada
      var nombre = document.getElementById("nombre");
      var apellidos = document.getElementById("apellidos");
      var correo = document.getElementById("correo");
      var contra = document.getElementById("contra");

      if (nombre.value === '' && apellidos.value === '' && correo.value === '' && contra.value === '') {
        alert("ERROR");
      } else {
        nombre.value = '';
        apellidos.value = '';
        correo.value = '';
        contra.value = '';
      }
      
};
