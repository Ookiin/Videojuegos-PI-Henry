import React from 'react';
import stl from './Vgcard.module.css'

export default function Vgcard({name, image, genres, rating}) {

    let genre = genres.split(',')

    if (genre.length > 2) { genre = genre.slice(0,2) }
    if (genre.length === 1) { genre = genre.toString() } 
    else { genre = genre.toString() + " (...)" }   

    return (

        <div className={stl.container}>         
            <div className={stl.card}>
                
                <h4 className={stl.name}>{name}</h4>

                <img className={stl.imag} src={image} alt ='Not Found' />
            
                <p className={stl.genre}>{genre}</p>  

                <span className={stl.rating}>{rating}</span>
  
           </div> 
        </div>   
        
    )
}
