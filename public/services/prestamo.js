async function getPrestamo() {
    try {
        const response = await fetch('http://localhost:3003/prestamo', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching users');
        }

        const users = await response.json();
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}

export { getPrestamo };

//////////LLAMADO POST//////////

async function postPrestamo(nombreId,sede,fechaSalida,fechaRegreso,codigoCompu) {
    try {
     
        const userData = { 
            nombreId,
            sede,
            fechaSalida,
            fechaRegreso,
            codigoCompu
        };



        const response = await fetch("http://localhost:3003/prestamo", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

     
        return await response.json();

        
    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}

export{postPrestamo}

//////////////LLAMADO UPDATE/////////////


async function updatePrestamo(nombreId,sede,fechaSalida,fechaRegreso,codigoCompu,id) 
{
    try {
     
        const userData = { 
            nombreId,
            sede,
            fechaSalida,
            fechaRegreso,
            codigoCompu
        };


        


        const response = await fetch("http://localhost:3003/prestamo/"+id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

     
        return await response.json();
    } catch (error) {
        console.error('Error update user:', error);
        throw error;
    }
}

export{updatePrestamo}



//////////////LLAMADO DELETE/////////////


async function deletePrestamo(id) {
    try {
        const response = await fetch(`http://localhost:3003/prestamo/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error deleting user with id ${id}`);
        }

        return { message: `User with id ${id} deleted successfully` };
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
}

export { deletePrestamo };