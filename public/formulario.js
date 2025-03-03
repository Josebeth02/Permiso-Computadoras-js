import { getPrestamo,postPrestamo,updatePrestamo,deletePrestamo } from "./services/prestamo.js";

const name = document.getElementById("nombreId");
const sede = document.getElementById("sede");
const fechaSalida = document.getElementById("fechaSalida");
const fechaRegreso = document.getElementById("fechaRegreso");
const codigo = document.getElementById("codigo");
const condiciones = document.getElementById("btn");
const btnenviar = document.getElementById("btnenviar");


//const mostrar2 = document.getElementById("mostrar2");
//const infoEstudiante = document.getElementById("infoEstudiante")
//mostrar2.textContent = infoEstudiante.nombreId;

let info = JSON.parse(localStorage.getItem("impre2"))
console.log(info.name);
name.value = info.name;


btnenviar.addEventListener("click", function () {
    console.log(btnenviar);
    postPrestamo(name.value,sede.value,fechaSalida.value,fechaRegreso.value,codigoCompu.value)
    console.log(postPrestamo);
    
    Swal.fire({
        title: "Datos enviados correctamente",
        text: "",
        icon: "success"
      });
      if (nombreId.value === "" || codigoCompu.value === "" || fechaSalida.value === "" || fechaRegreso.value === "") {
        Swal.fire({
            title: "Completar todos los campos",
            text: "",
            icon: "success"
          })
          if (fechaSalida < fechaRegreso){
            Swal.fire({
              icon: 'warning',
              text: "Fecha no permitida"
            });
            return false;
          }
          if (fechaRegreso >= fechaSalida){
            Swal.fire ({
              icon: 'warning',
              text: "Fecha no permitida"
            })
          }
      }
})

