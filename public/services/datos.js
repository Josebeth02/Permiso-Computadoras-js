async function getDatos() {
    try {
        const response = await fetch('http://localhost:3003/datos', {
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

export { getDatos };

//////////LLAMADO POST//////////

async function postDatos(usuario,contrasena,tipo) {
    try {
     
        const userData = { 
            usuario,
            contrasena,
            tipo
        };



        const response = await fetch("http://localhost:3003/datos", {
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

export{postDatos}

//////////////LLAMADO UPDATE/////////////


async function updateDatos(usuario,contrasena,id) 
{
    try {
     
        const userDatos = { 
            usuario,
            contrasena
        
        };


        


        const response = await fetch("http://localhost:3003/datos"+id, {
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

export{updateDatos}



//////////////LLAMADO DELETE/////////////


async function deleteDatos(id) {
    try {
        const response = await fetch(`hhttp://localhost:3003/datos/${id}`, {
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

export { deleteDatos };