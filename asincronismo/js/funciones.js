proceso1 = async() => {
    let suma1 = 0;
    return new Promise( (resolve, reject) => setTimeout(() => {
        for(let i = 0; i<=5000; i++)
        {
            suma1+=i
        }
        resolve(`Proceso 1: La suma es ${suma1}`)
    }, 5000) //retraso de 5 segundos
    )
}

proceso2 = async() => {
    let suma2 = 0;
    return new Promise( (resolve, reject) => setTimeout(() => {
        for(let i = 0; i<=20000; i++)
        {
            suma2+=i
        }
        resolve(`Proceso 2: La suma es ${suma2}`)
    }, 8000) //retraso de 8 segundos
    )
}

proceso3 = async() => {
    let suma3 = 0;
    return new Promise( (resolve, reject) => setTimeout(() => {
        for(let i = 0; i<=1000; i++)
        {
            suma3+=i
        }
        resolve(`Proceso 3: La suma es ${suma3}`)
    }, 3000) //retraso de 3 segundos
    )
}


document.querySelector('#btnBuscar')
.addEventListener('click', () => {
    proceso1().then(mensaje => console.log(mensaje))
    proceso2().then(mensaje => console.log(mensaje))
    proceso3().then(mensaje => console.log(mensaje))
})


/*
Convertir el anterior codigo a funciones sincronicas.
Sin promesas y sin el async
*/


// function proceso1(callback) {
//     let suma1 = 0;
//     setTimeout(() => {
//         for (let i = 0; i <= 5000; i++) {
//             suma1 += i;
//         }
//         callback(`Proceso 1: La suma es ${suma1}`);
//     }, 5000); // retraso de 5 segundos
// }

// function proceso2(callback) {
//     let suma2 = 0;
//     setTimeout(() => {
//         for (let i = 0; i <= 20000; i++) {
//             suma2 += i;
//         }
//         callback(`Proceso 2: La suma es ${suma2}`);
//     }, 8000); // retraso de 8 segundos
// }

// function proceso3(callback) {
//     let suma3 = 0;
//     setTimeout(() => {
//         for (let i = 0; i <= 1000; i++) {
//             suma3 += i;
//         }
//         callback(`Proceso 3: La suma es ${suma3}`);
//     }, 3000); // retraso de 3 segundos
// }

// document.querySelector('#btnBuscar').addEventListener('click', () => {
//     proceso1(mensaje => {
//         console.log(mensaje);
//         proceso2(mensaje => {
//             console.log(mensaje);
//             proceso3(mensaje => {
//                 console.log(mensaje);
//             });
//         });
//     });
// });


/*
Dadas 4 listas de documentos implementar una funcion
async por cada lista para buscar un documento.
Si el documento esta devolver encontrado.
Imprimir el mensaje

Compartir un repositorio de git con los talleres de repaso al email:
dilopezz@sena.edu.co
*/



