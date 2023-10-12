const validarUsuario = () => {
    let usuario = document.getElementById('usuario').value;
    let contraseña = document.getElementById('contraseña').value;

    if (usuario === 'Sebastian G' && contraseña === '1510') {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'El '+usuario+' ha iniciado sesion',
            showConfirmButton: false,
            timer: 1500
          })
    } else {
        if (usuario === '') {
            alert('El campo usuario está vacío. Verifique.');
        } else if (usuario !== 'sebas G') {
            alert('El usuario no está registrado');
        }

        if (contraseña === '') {
            alert('El campo contraseña no debe estar vacío');
        } else if (contraseña !== '1510') {
            alert('Ingresaste una contraseña incorrecta');
        }
    }
};

const boton = document.querySelector('#btn');
boton.addEventListener('click', validarUsuario);