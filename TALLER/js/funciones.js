/*
Dadas 4 listas de documentos implementar una funcion
async por cada lista para buscar un documento.
Si el documento esta devolver encontrado.
Imprimir el mensaje

Compartir un repositorio de git con los talleres de repaso al email:
dilopezz@sena.edu.co
*/

var documento1 = [1010, 1111, 1212, 1313]
var documento2 = [1414, 1515, 1616, 1717]
var documento3 = [1818, 1919, 2020, 2121]
var documento4 = [2222, 2323, 2424, 2525]


const buscarDocumento1 = async(dato) => {
    let encontrado = false;
    let documentoEncontrado = '';

    for (let i = 0; i < documento1.length; i++){
        if (dato == documento1[i]) {
            encontrado = true;
            documentoEncontrado = documento1[i];
        }
    }
    return new Promise((resolve, reject) => setTimeout(() =>{
        if (encontrado){
            resolve('Documento encontrado: '+documentoEncontrado+' en la lista 1');
        }
        else{
            reject('Documento no encontrado')
        }
    }, 1000)
    )
}

const buscarDocumento2 = async(dato) => {
    let encontrado = false;
    let documentoEncontrado = '';

    for (let i = 0; i < documento2.length; i++){
        if (dato == documento2[i]) {
            encontrado = true;
            documentoEncontrado = documento2[i];
        }
    }
    return new Promise((resolve, reject) => setTimeout(() =>{
        if (encontrado){
            resolve('Documento encontrado: '+documentoEncontrado+' en la lista 2');
        }
        else{
            reject('Documento no encontrado')
        }
    }, 4000)
    )
}

const buscarDocumento3 = async(dato) => {
    let encontrado = false;
    let documentoEncontrado = '';

    for (let i = 0; i < documento3.length; i++){
        if (dato == documento3[i]) {
            encontrado = true;
            documentoEncontrado = documento3[i];
        }
    }
    return new Promise((resolve, reject) => setTimeout(() =>{
        if (encontrado){
            resolve('Documento encontrado: '+documentoEncontrado+' en la lista 3');
        }
        else{
            reject('Documento no encontrado')
        }
    }, 2000)
    )
}

const buscarDocumento4 = async(dato) => {
    let encontrado = false;
    let documentoEncontrado = '';

    for (let i = 0; i < documento4.length; i++){
        if (dato == documento4[i]) {
            encontrado = true;
            documentoEncontrado = documento4[i];
        }
    }
    return new Promise((resolve, reject) => setTimeout(() =>{
        if (encontrado){
            resolve('Documento encontrado: '+documentoEncontrado+' en la lista 4');
        }
        else{
            reject('Documento no encontrado')
        }
    }, 5000)
    )
}


document.querySelector('#btnBuscar')
.addEventListener('click', () => buscarDocumento1(document.getElementById('dato').value)

.then(mensaje => console.log(mensaje))
.catch(error => console.log(error))

)

document.querySelector('#btnBuscar')
.addEventListener('click', () => buscarDocumento2(document.getElementById('dato').value)

.then(mensaje => console.log(mensaje))
.catch(error => console.log(error))

)

document.querySelector('#btnBuscar')
.addEventListener('click', () => buscarDocumento3(document.getElementById('dato').value)

.then(mensaje => console.log(mensaje))
.catch(error => console.log(error))

)

document.querySelector('#btnBuscar')
.addEventListener('click', () => buscarDocumento4(document.getElementById('dato').value)

.then(mensaje => console.log(mensaje))
.catch(error => console.log(error))

)




