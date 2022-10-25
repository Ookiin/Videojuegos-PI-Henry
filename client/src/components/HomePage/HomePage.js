import React, { useEffect } from 'react';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

import stl from '../HomePage/HomePage.module.css'

import Paging from '../Paging/Paging';
import SearchBar from '../SearchBar/SearchBar';
import Loading from '../Loader/Loader';
import Vgcard from '../Vgcard/Vgcard';

import genrefilter from '../../actions/genrefilter'
import vgorigin from '../../actions/vgorigin';
import sortvgames from '../../actions/sortvgames';
import getvideogames from '../../actions/getvideogames';
import getgenres from '../../actions/getgenres';

export default function HomePage () {

    const dispatch = useDispatch();

    //Paginado y ordenamiento de cards en la pagina principal
    const allVgames = useSelector((state) => state.videogames) 
    const allgenres = useSelector((state) => state.genres)

    const [currentPage, setCurrentPage] = useState(1) 
    const [vgamesPerPage] = useState(15)

    const lastVgameIndex = currentPage * vgamesPerPage 
    const firstVgIndex = lastVgameIndex - vgamesPerPage 
    const currentVgames = allVgames.slice(firstVgIndex,lastVgameIndex) 

    const actualPage = (pageNumber) => {setCurrentPage(pageNumber)}
  
    //Handlers
    function handleGenreFilter(e) {
        e.preventDefault();
        dispatch(genrefilter(e.target.value))
    }
  
    function handleOriginFilter(e) {
        dispatch(vgorigin(e.target.value))
        setCurrentPage(1)
    }

    function handleShowAll(e) {
        e.preventDefault();
        dispatch(getvideogames())
    }
  
    function handleSortvgames(e) { 
        e.preventDefault();
        dispatch(sortvgames(e.target.value))
        dispatch(getgenres())
    }     

    //Refresh 
    useEffect (() => {
      dispatch(getgenres())
    }, [dispatch])

    useEffect (() => {    
      if (allVgames.length === 0) 
      dispatch(getvideogames())
    }, [allVgames.length, dispatch])


    if (allVgames.length === 0) {
      return <div className={stl.loader}>
        <Loading />
      </div>
    } 
    
    return (
        <div className= {stl.paginaEntera} >

            <div className= {stl.header}>
              
              <div className={stl.busquedaCrear}>
              
                  <div>
                    <button className={stl.botonHeader} onClick={e => {handleShowAll(e)}}>Cargar todos los Juegos</button>
                  </div>

                  <div>           
                    <SearchBar/>
                  </div>

                  <div>   
                    <Link to='/videogame'>
                      <button className={stl.botonHeader}>Crear Juego</button>
                    </Link>   
                  </div>

              </div>

              <div className={stl.filtros}>

                <div>                    
                  <select className={stl.filterOrder} onChange={e => handleGenreFilter(e)}>
                    { allgenres.sort().map(e => {
                      return <option value={e} key={e}>{e}</option>
                    }) }      
                  </select>
                </div>

              <div>  
                  <select className={stl.filterOrder} onChange={e => handleSortvgames(e)}>

                    <option value='ratingUp'>Highest Rating</option>
                    <option value='ratingDown'>Lowest Rating</option>
                    <option value='asc'>A-Z</option>
                    <option value='desc'>Z-A</option>

                  </select>
              </div>  
                
              <div>
                  <select className={stl.filterOrder} onChange={e => handleOriginFilter(e)}> 

                    <option value='All'>Api+DB Games</option>
                    <option value='DB'>Db Games</option>
                    <option value='API'>Api Games</option>

                  </select>
              </div>

            </div>
        </div>    

              <div className={stl.paginado}>
              
                  <Paging vgamesPerPage={vgamesPerPage} allVgames={allVgames.length} currpage={currentPage} actualPage={actualPage}/>
                  
              </div>

              <div className={stl.cardgame} > 

                {currentVgames && currentVgames.map(p => {
                           
                    return (                                          
                          <Link to ={"/videogame/" + p.id} key={p.id}>
                             <Vgcard 
                             id={p.id}
                             name={p.name}
                             image={p.image} 
                             genres={p.genres} 
                             rating={p.rating}
                             />
                          </Link>                                          
                    )})                                   
                }
                
              </div>
          </div>
    )                     
}