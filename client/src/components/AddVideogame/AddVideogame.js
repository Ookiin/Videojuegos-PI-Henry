import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import postvgame from '../../actions/postvgame';
import getvgames from '../../actions/getvideogames';
import  stl from './AddVideogame.module.css';
import getplatforms from '../../actions/getplatforms';
import getgenres from '../../actions/getgenres';
import Loading from '../Loader/Loader';


function validate(input) {

    let errors = {}

    if (!input.name) {
        errors.name = 'Se requiere un Nombre' 

    } else if (!input.rating || input.rating < 0 || input.rating > 5) {
        errors.rating = 'Rating debe ser entre 0-5'

    // } else if (!input.reldate || (!/^\d{1,2}\-\d{1,2}\-\d{4}$/.test(input.reldate))) {
    //     errors.reldate = 'Release Date de ser en formato DD-MM-YYYY o D-M-YYYY'

    } else if (input.platform.length === 0) {
        errors.platform = 'Se requiere minimo una Platform'

    } else if (!input.description) {
        errors.description = 'Se requiere una descripcion'

    } else if (input.genre.length === 0) {
        errors.genre = 'Se requiere minimo un Genre'
    
    }
    return errors 
}

export default function AddVideogame() {

    const dispatch = useDispatch()
    const history = useHistory()
    
    const [input,setInput] = useState({
        name: '',   
        description: '',
        reldate: '',
        rating:'',
        platform: [],
        genre: []
    })

    const [errors,setErrors] =  useState({})
    let allgenres = useSelector((state) => state.genres) 
    let allplatforms = useSelector((state) => state.platforms)

    allgenres = allgenres.filter(p => p !== 'All')

    let repeatPlat = []
    for (let i = 0; i < input.platform.length; i++) {
        repeatPlat.push(input.platform[i]) 
    }

    //Handlers  
    function handleOnChange(e) {
        setInput({
          ...input,
          [e.target.name]: e.target.value
        })
        setErrors(validate ({
            ...input,
            [e.target.name]: e.target.value
        }))
     }

     function handlePlatforms(e) {
      if (!repeatPlat.includes(e.target.value))  
        setInput({
          ...input,
          platform: [...input.platform, e.target.value]
        })
     } 

     function handleGenres(e) {
        setInput({
          ...input,
          genre: [...new Set([...input.genre, e.target.value])]   
        }) 
     }

     function handleSubmit(e) {
         e.preventDefault()
         if (!input.name) {return alert('Nombre es requerido')}
        //  if (!/^\d{1,2}\-\d{1,2}\-\d{4}$/.test(input.reldate)) 
        //     {return alert('Formato erroneo de Release Date, deberia ser DD-MM-YYYY o D-M-YYYY')}
         if (!input.rating) {return alert('Rating es requerido')}
         if (!/^(?:[1-9]\d{0,2}(?:,\d{3})*|0)(?:\.\d+)?$/.test(input.rating) || 
            input.rating < 0 || input.rating > 5) 
            {return alert('Formato erroneo de Rating, deberia ser un numero entre 0-5')
         }
         if (!input.description) {return alert('La descripcion es requerida')}
         if (input.platform.length === 0) {return alert('La Platform es requerida')}
         if (input.genre.length === 0) {return alert('El Genre es requerido')}

         dispatch(postvgame(input))
         dispatch(getvgames())

         alert(`Has creado el juego ${input.name} exitosamente`)

         setInput({
            name: '',
            description: '',
            reldate: '',
            rating: 0,
            platform: [],
            genre: []
         })

         history.push('/videogames')
      }

  useEffect(() => {
   if (allgenres.length === 0)
   dispatch(getgenres())
  }, [allgenres.length, dispatch])

  useEffect(() => {
    if (allplatforms.length === 0)
    dispatch(getplatforms())
  }, [allplatforms.length, dispatch])

  if (allplatforms.length === 0) {
    return <div>
        <Loading />
    </div>
  }

return (
    <>
        <div className={stl.page}>

                <h1 className={stl.titulo}>Crea tu propio Videojuego</h1>

            <div  className={stl.card}>
        
                <form className={stl.formArea} onSubmit={handleSubmit}>
           
                    <div className={stl.descriptionArea}>

                        <label>Description:</label>
                        <textarea onChange={handleOnChange} type='text' name='description' value={input.description} />

                    </div>

                    <div className={stl.detailsArea}>

                        <label>Game Name:</label>
                        <input onChange={handleOnChange} onBlur={handleOnChange} 
                        type='text' name='name' value={input.name}/>
                        {errors.name && ( <p className={stl.error}> {errors.name} </p> )}

                        <label>Released date:</label>
                        <input onChange={handleOnChange} type='text' name='reldate' value={input.reldate} 
                        placeholder='DD-MM-YYYY o D-M-YYYY'/>
                        {errors.reldate && ( <p className={stl.error}> {errors.reldate} </p> )}

                        <label>Rating:</label>
                        <input onChange={handleOnChange} onBlur={handleOnChange}
                        type='text' name='rating' value={input.rating} placeholder='4.3'/>
                        {errors.rating && ( <p className={stl.error}> {errors.rating} </p> )} 

                        <label>Platforms:</label>   
                        <select className={stl.platform} onChange={handlePlatforms}>
                        {allplatforms.sort().map(p => {
                        return <option value={p}>{p}</option>
                        })}
                        </select>

                        <ul><li>{input.platform.map(p => p + ' ,')}</li></ul>
                        {errors.platform && ( <p className={stl.error}> {errors.platform} </p> )}     

                        <label>Genres:</label>
                        <select className={stl.genres} onChange={handleGenres}>
                        {allgenres.sort().map(p => {
                        return <option value={p}>{p}</option>
                        })}
                        </select>

                        <ul><li>{input.genre.map(p => p + ' ,')}</li></ul> 
                        {errors.genre && ( <p className={stl.error}> {errors.genre} </p>)}  

                        
                        <button className={stl.bot} type='submit'>Agregar juego</button> 

                        <span><Link to='/videogames'><button className={stl.bot2}>Volver a Home</button></Link> </span>

                    </div>

                </form>
            </div>
        </div>

    </>
)

}

