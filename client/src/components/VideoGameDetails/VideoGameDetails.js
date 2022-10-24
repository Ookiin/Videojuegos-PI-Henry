import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import stl from './VideoGameDetails.module.css';
import { getClean } from '../../actions/getclean';
import getvgamebyid from '../../actions/getvgamebyid'
import deletegame from '../../actions/deletegame';
import Loading from '../Loader/Loader';

export default function VideoGameDetails(props) {

    const dispatch = useDispatch()
    const detail = useSelector((state) => state.videodetails)  

    function handleDelete(e) {
        e.preventDefault();
        dispatch(deletegame(props.match.params.id));
        alert('Juego eliminado')
        window.location.replace("/videogames");
    }
    
    useEffect(() => {
        dispatch(getvgamebyid(props.match.params.id))
        return () => { dispatch(getClean()) }
        // eslint-disable-next-line
    },[dispatch])

    if (detail.length === 0) {
        return <div className={stl.loader}>
          <Loading />
        </div>
      }

if (detail.db) {
    return (
        
        <div className={stl.card}>  
            <div className={stl.area}>

                <div className={stl.detalles}>
                    <h2>{detail.name}details</h2>     
                </div>

                    <img className={stl.img} src={detail.image} alt="" />

                        <h3 className={stl.descriptionName}>Description</h3>
                        <h5 className={stl.description}>{detail.description}</h5>

                            <div className={stl.detalles}>                             
                                <h4 className={stl.rating}>{`Rating: ${detail.rating}`}</h4>
                            </div>

                            <div className={stl.detalles}>
                                <h4>{`Released date: ${detail.reldate}`}</h4>
                            </div>  

                        <h4 className={stl.platforms}>{`Platforms: ${detail.platforms}`}</h4>
                        <h4 className={stl.genres}>{`Genres: ${detail.genres}`}</h4>

                    <Link to='/videogames'>
                        <button className={stl.button}>Volver al Home</button>
                    </Link>

                    <div className={stl.contenedorDelete}>                   
                    <button className={stl.delete} onClick={handleDelete}>Eliminar Juego</button>
                </div>

            </div>                              
        </div>  
    ) 
} else {
    return (
        
        <div className={stl.card}>  
            <div className={stl.area}>

                <div className={stl.detalles}>
                    <h2>{detail.name}details</h2>     
                </div>

                    <img className={stl.img} src= {detail.image} alt="" />

                        <h3 className={stl.descriptionName}>Description</h3>
                        <h5 className={stl.description}>{detail.description}</h5>

                            <div className={stl.detalles}>
                                <h4 className={stl.rating}>{`Rating: ${detail.rating}`}</h4>
                            </div>
                        
                            <div className={stl.detalles}>
                                <h4>{`Released date: ${detail.released}`}</h4>
                            </div>      

                        <h4 className={stl.platforms}>{`Platforms: ${detail.platforms}`}</h4>
                        <h4 className={stl.genres}>{`Genres: ${detail.genres}`}</h4>

                    <Link to='/videogames'>
                        <button className={stl.button}>Volver al Home</button>
                    </Link>

            </div>  
        </div>  
    )}
}

