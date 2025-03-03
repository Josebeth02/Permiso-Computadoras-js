import { getDatos,postDatos,updateDatos,deleteDatos } from "./services/datos.js";

const usuario = document.getElementById("usuario");
const contrasena = document.getElementById("contrasena");
const button = document.getElementById("button")

button.addEventListener("click", function () {
    verificador2()
})

async function verificador2() {
    const datos = await getDatos()
    for (let index = 0; index < datos.length; index++) {
       if (usuario.value === datos[index].usuario && contrasena.value === datos[index].contrasena && datos[index].tipo === "profesor") {
        Swal.fire({
            title: "Soy un profesor",
            text: "",
            icon: "success"
          });
           
            setTimeout(() => {
                 window.location.href="pagProfesor.html"
            }, 4000);

       } else if (usuario.value === datos[index].usuario && contrasena.value === datos[index].contrasena && datos[index].tipo === "estudiante") {
        
        const impresion ={
          "name": datos[index].usuario
         }
         localStorage.setItem("impre2", JSON.stringify(impresion))
         
        Swal.fire({
            title: "Soy un estudiante",
            text: "",
            icon: "success"
          });
         setTimeout(() => {
            window.location.href="pagEstudiante.html"
         }, 4000);
       } 
    }
}





