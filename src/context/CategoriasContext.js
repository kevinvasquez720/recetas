import { createContext, useEffect, useState } from "react";
import axios from "axios";
//creamos context
export const CategoriasContext = createContext()
//provider es donde se encuentra las funciones y el state
const CategoriasProvider = (props) => {
    const[categorias, guardarCategorias] = useState([])
    //ejecuta el llamado a la API
    useEffect(()=>{
        const obtenerCategorias = async () => {
            const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
            const categorias = await axios.get(url);
            console.log(categorias);
        }
        obtenerCategorias()
    },[])
    return(
        <CategoriasContext.Provider value = {{}}>
            {props.children}
        </CategoriasContext.Provider> 
    )
}

export default CategoriasProvider
