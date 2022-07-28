import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux/es/exports';


const ProtectedRoutes = () => {
const user = useSelector((state)=>state.user)
		// Aquí va la condición. Puede ser una condición de cualquier tipo. Lo que 
		// Importa es que valide si el usuario está loggeado o no
        //Si coloco true en la condicion no tengo que colocar un nombre cada vez que refresque la pagina
        //https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154

    
        if(user){
        return <Outlet />
    } else { 
        return <Navigate to='/' />
    }                     // Aquí le debemos decir la ruta a la que queremos llevar
};                        // al usuario si no está autenticado

export default ProtectedRoutes;