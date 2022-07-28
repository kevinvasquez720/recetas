import React, {useContext} from 'react';
import { CategoriasContext } from '../context/CategoriasContext';

const Formulario = () =>{
    const{} = useContext(CategoriasContext)
    return(
        <form className='col-12'>
            <fieldset className='text-center'>
                <label>Busca bebidas por categoria o ingredientes</label>
            </fieldset>
            <div className='row mt-4'>
                <div className='col-md-4'>
                    <input name='nombre' className='form-control' type="text" placeholder='Buscar por ingrediente'></input>
                </div>
                {/* <div className='col-md-2'>
                    <input type="submit" className='btn btn-block btn-primary' value="Buscar Bebidas"></input>

                </div> */}
                <div className='col-md-4'>
                    <select className='form-control' name='categoria'>
                        <option value="">Seleccionar Categoria</option>

                    </select>
                </div>
                <div className='col-md-4'>
                    <input type="submit" className='btn btn-block btn-primary' value="Bescar Bebidas" ></input>
                </div>
            </div>
            
        </form>
   )
}

export default Formulario;
