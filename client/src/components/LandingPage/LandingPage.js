import React, { useEffect } from "react";
import {useDispatch} from 'react-redux';
import { Link } from "react-router-dom";
import getplatforms from '../../actions/getplatforms'
import getgenres from '../../actions/getgenres';
import getvgames from "../../actions/getvideogames";
import sortvgames from "../../actions/sortvgames";
import stl from "./LandingPage.module.css";

export default function LandingPage() {

   const dispatch = useDispatch();

   useEffect (() => {
      dispatch(getplatforms());
      dispatch(getgenres()); 
      dispatch(getvgames());
   },[dispatch])
   
   function handleSortvgames(e) {
      dispatch(sortvgames('asc'))
  }

   return (
   
      <div className={stl.landingPage}> 

         <div className={stl.titulo}>
            <h1 className={stl.h1}>Videojuegos Henry PI</h1>
         </div>

         < Link to = '/videogames'> 
            <button className={stl.button} onClick={handleSortvgames}>Start Game</button>
         </Link>

      </div>
       
   )   
}