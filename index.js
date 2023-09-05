let form=document.getElementById("formulario")

document.getElementById("Enviar").addEventListener("click", function () {
    const nombre = document.getElementById("Nombre").value;
    const apellido = document.getElementById("Apellido").value;
    const fecha = documnt.getElementById("Fecha").value;


    
let datosFormulario = new FormData(form);
console.log (datosFormulario);
fetch('https://jsonplaceholder.typicode.com/users',{
    method:'POST',  
    body: datosFormulario
})
 .then((Response)=> Response.json())
.then(()=>{
    document.getElementById("result").innerHTML=`Se registraron los datos 
    Nombre: ${nombre}<br>
    Apellido: ${apellido}<br>
    Fecha: ${fecha}
 `});
});
