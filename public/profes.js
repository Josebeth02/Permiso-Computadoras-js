import { getPrestamo,postPrestamo,updatePrestamo,deletePrestamo } from "./services/prestamo.js";

const mostrar = document.getElementById("mostrar")

lisPrestamos()

async function lisPrestamos() {
    const inf = await getPrestamo()
    console.log(inf);
    
    mostrar.textContent =""
    for (let index = 0; index < inf.length; index++) {
        let p = document.createElement("p")
        p.textContent = inf[index].nombreId +" "+ inf[index].sede +""+ inf[index].fechaSalida +" "+ inf[index].fechaRegreso +" "+ inf[index].codigoCompu
        mostrar.appendChild(p)

        let botonEliminar = document.createElement("button")
        mostrar.appendChild(botonEliminar)
        botonEliminar.textContent = "Eliminar"

        botonEliminar.addEventListener("click", function () {
           mostrar.removeChild(botonEliminar);
           mostrar.removeChild(p) 
           botonEliminar.setAttribute("class", "btnE" ) 

           deletePrestamo(inf[index].id)
        })
    }
}
