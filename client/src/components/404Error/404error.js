import React from 'react';
import stl from "./error.module.css";
import { Link } from 'react-router-dom';

function Page404() {

    return (

        <div className={stl.error}>
          
            <p className={stl.text}>Esa pagina no existe pero has desbloqueado nuevo logro:</p>

            <p className={stl.errortext}> 404 error</p>
       
            <span>
                <Link to='/videogames'>
                    <button className={stl.bot}>Volver a Home</button>
                </Link> 
            </span>
            
        </div>  
    )
}

export default Page404
