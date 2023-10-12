const calcularSubTotal = () => {
    let precio = document.getElementById('precio').value
    let cantidad = document.getElementById('cantidad').value

    if (precio.lentgh == 0 || cantidad.lentgh != 0){
        document.getElementById('subtotal').value = precio * cantidad;
    }  
}

const limpiar  = () => {

}

const btnLimpiar = document.querySelector('#btnLimpiar')
btnLimpiar.addEventListener('click',limpiar)