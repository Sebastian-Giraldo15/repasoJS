const validarContacto = () => {
  //validar campos vacios
  let documento = document.querySelector('#documento');
  let nombres = document.querySelector('#nombres');
  if (documento.value.length == 0) {
    //
    Swal.fire(
      'El documento esta vacio. Verifique',
      '',
      'Error'
    )
    // alert('El documento esta vacio. Verifique')
  }
  else if (nombres.value.length == 0) {
    Swal.fire(
      'El documento esta vacio. Verifique',
      '',
      'Error'
    )
    // alert('El nombre esta vacio. Verifique')
  }
  else {
    // alert('Datos enviados correctamente')
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Datos enviados correctamente',
      showConfirmButton: false,
      timer: 2500
    })
  }
}

//Capturar el objeto al cual se le dara click
const boton = document.querySelector('#btnEnviar')
//Escuchar eventos del boton
boton.addEventListener('click', validarContacto)

/* 
Diseñe uno de los formularios asignados en su proyecto
Validar campos obligatorios con js
Subir repositorio a git 
**/