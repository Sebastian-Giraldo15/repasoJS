function listarDatos(){
    let resultado = ''
    fetch('https://www.datos.gov.co/resource/ceyp-9c7c.json')
    .then(response => response.json())
    .then(data => console.log(data));
}



fetch('https://www.datos.gov.co/resource/ceyp-9c7c.json')
.then(response => response.json())
.then(data => console.log(data));