const buscarCliente = (dato) => {
    const documentos = [1010, 1011, 1020, 1030, 1957, 5550]
    const nombres = ['Carmen', 'Ines', 'Juan', 'Daniela', 'Maria', 'Janeth']
    let encontrado = false;
    let nombreEncontrado = '';

    //email: dilopezz@sena.edu.co
    //Agregar el codigo que devuelva en la promesa el nombre solo si
    //el documento existe

    for(let i = 0; i < documentos.length; i++){
        if (dato == documentos[i]) {
            encontrado = true;
            nombreEncontrado = nombres[i];
            break;
        }
    }
    return new Promise((resolve, reject) =>{
        if(encontrado){
            resolve('Dato encontrado '+nombreEncontrado);
        }
        else{
            reject('Dato no encontrado')
        }
    })
}

document.querySelector('#btnBuscar')
.addEventListener('click', () => buscarCliente(document.getElementById('dato').value)
.then(mensaje => console.log(mensaje))
.catch(error => console.log(error))
)

/*
Validar el login del proyecto formativo con una promesa.
Emplear datos constantes

*/