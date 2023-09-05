document.getElementById("Enviar").addEventListener("click", function () {
    const nombre = document.getElementById("Nombre").value;
    const apellido = document.getElementById("Apellido").value;
    const fecha = documnt.getElementById("Fecha").value;


    
const datos = {
        
    nomb: nombre,
    apellido: apellido,
    fecha: fecha
};

fetch('https://jsonplaceholder.typicode.com/users',{
    method:'POST',
    body:JSON.stringify(datos),
    headers:{'Content-Type':'application/json'    
}
})
 .then(Response=> Response.json())
.then(data =>{
    console.log(datos);
})
    .catch(error=>{
        console.error('Error:',error);
    });
});




