import { getDatos,postDatos,updateDatos,deleteDatos } from "./services/datos.js";

const usuario = document.getElementById("usuario");
const contrasena = document.getElementById("contrasena");
const button = document.getElementById("button")

button.addEventListener("click", function() {
    postDatos(usuario.value,contrasena.value,"estudiante")
    Swal.fire({
        title: "Usuario registrado",
        text: "",
        icon: "success"
      });
      if (usuario.value === "" || contrasena.value === "") {
       Swal.fire({
        icon: "error",
        title: "¡Completar todos los campos!",
        text: "",
      });
    }
})



 