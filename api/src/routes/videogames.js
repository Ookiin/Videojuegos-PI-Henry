var express = require('express');
const {apikey, Videogame, Genre} = require('../db');
var router = express.Router();
const axios = require('axios');


//Buscar todos los juegos o encontrarlos por query name
router.get('/', async (req, res) => {  
    const {name} = req.query;
    
    //Buscar videojuegos de la API
    try { 
        if (name) {
           let sname = name.split(' ').join('-').toLowerCase()
           let apiresult = await axios.get(`https://api.rawg.io/api/games?search=${sname}&key=${apikey}&page_size=100`)
           apiresult = apiresult.data.results
        } else {
            async function SearchApi () {
              //Voy a traer 3 paginas trayendo 50 videojuegos por pagina
              try { 
                 const promise1 = axios.get(`https://api.rawg.io/api/games?key=${apikey}&page=1&page_size=50`);
                 const promise2 = axios.get(`https://api.rawg.io/api/games?key=${apikey}&page=2&page_size=50`);
                 const promise3 = axios.get(`https://api.rawg.io/api/games?key=${apikey}&page=3&page_size=50`);
  
                 //Concateno las respuestas con un promise.all(paralelo)
                     await Promise.all([promise1, promise2, promise3])
                        .then(function(values) {
                           apiresult = values[0].data.results.concat
                                      (values[1].data.results).concat
                                      (values[2].data.results)
                            })
                          } catch (err) { console.log('Error buscando en la API: ', err) }}

                             await SearchApi()
                          } 

          if (apiresult.length > 0) {  
            var apivgames = apiresult.map(p => { 
              const b = []
              for (i = 0; i < p.genres.length; i++) { b.push(p.genres[i].name) }
              return {
                id: p.id,
                name: p.name,
                image: p.background_image,
                genres: b.toString(),
                rating: p.rating,
                origin: 'API',
                platforms: p.platforms.map(b => b.platform.name)
              }
            })  

           if (name) {
            apivgames = apivgames.filter(p => p.name.toLowerCase().includes(name.toLowerCase()))}      
             } 
              //  else 
              //  var apivgames = []
            
      //Buscar videojuegos de la base de datos
        let bdgames = []
        bdgames = await Videogame.findAll({
          //Voy a buscar todos los videojuegos pero que incluya solo el nombre de los genres
          include: { model: Genre, attributes: ['name']} })
          
        try {
          if (name) { bdgames = bdgames.filter(p => p.name.toLowerCase().includes(name.toLowerCase())) }

          var dbvgames = bdgames.map(p => {
            let b = []
            for ( i = 0; i < p.genres.length; i++ ) { b.push(p.genres[i].name) }
            return {
               id: p.id,
               name: p.name,
               image: "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg",
               genres: b.toString(),
               rating: p.rating,
               origin: 'DB',
            }
          }) 

      } catch (err) {
          console.log("No se encontraron juegos en la Base de Datos: ", err)
      }          
      
      //Concateno resultados y los devuelvo
      const allvgames = dbvgames.concat(apivgames)
      console.log("soy el concatenado", allvgames)
      
      res.status(200).json(allvgames.length ? allvgames : 'No videogames found');
    } catch (error) {
      res.status(404).send(`Error en la ruta /videogames ${error}`);
    }
  });
  
//Buscarlo por id
  router.get("/:id", async (req, res) => {  
    const {id} = req.params;
    try {
      if (!isNaN(id)){
    //Buscar videojuego en la API
         let idkey = parseInt(id)
         const result = await axios.get(`https://api.rawg.io/api/games/${idkey}?key=${apikey}`)
         if (result.data.id) {
          //Recorro los genres y las platforms para que me traiga solo los nombres
            let genrestr=[]
            for (i=0;i<result.data.genres.length;i++) { genrestr.push(result.data.genres[i].name) } 
            let platformstr=[]
            for (i=0;i<result.data.platforms.length;i++) { platformstr.push(result.data.platforms[i].platform.name) } 

            const searchapivg = {
              name: result.data.name,
              platforms: platformstr.toString(),
              released: result.data.released, 
              image: result.data.background_image,
              description: result.data.description.replace(/<[^>]+>/g, ''),
              rating: result.data.rating,
              genres: genrestr.toString()
            }
            return res.status(200).json(searchapivg)
         }
      } 
      
  //Buscar videojuego en la Base de Datos
      let searchdbvg  = await Videogame.findByPk(id, {
          include: [{ model: Genre, attributes: ['name'] }]
      });

      if (searchdbvg) {
         let genrestr=[]
         for (let i=0;i<searchdbvg.genres.length;i++) {
             genrestr.push(searchdbvg.genres[i].name)
         }
         const objdbgame = {
            name: searchdbvg.name,
            platforms: searchdbvg.platform, 
            released: searchdbvg.releaseDate, 
            image: "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg",
            description: searchdbvg.description,
            rating: searchdbvg.rating,
            genres: genrestr.toString(),
            db: "Juego Creado"
         }
         console.log("soy el objeto de la base de datos", objdbgame)
         return res.status(200).json(objdbgame)
         
      }    
    } catch (error) {
      return res.status(404).send({error: 'Videogame no encontrado'});
    }
  });

//Eliminar Videojuego

  router.delete("/:id", async (req, res) => {
   const {id} = req.params;
   try {
      const elem = await Videogame.findByPk(id);
    await elem.destroy(id);
    res.status(200).send("Eliminado con exito");
  } catch (error) {
      res.status(404).send("No se pudo eliminar este juego")
  }
});

//Agregar videojuego a la Base de Datos
  router.post('/', async (req, res) => {  
     let { name, description, reldate, rating, platform, genre} = req.body;
     platform = platform.toString();
     const addVgame = await Videogame.create({
        name,
        description,
        reldate,
        rating, 
        platform
     })
     console.log(addVgame)
 
//Busca un genre de la tabla Genres    
    const vg_genre = await Genre.findAll({ where:{name : genre} })
    
    //Genera una asociacion Videogame-Genres Link
    addVgame.addGenre(vg_genre)
    res.status(200).send('Has creado un nuevo juego')
   });

  module.exports = router;
  