const { Router } = require('express');
const axios = require('axios');
const {Genre} = require('../db');
const router = Router();

router.get('/', async (req, res) => {
    try {    
       const vgGenres = await Genre.findAll({
        attributes: ['name']
        })
       let dbGenres = vgGenres.map(p => p.name)        
       res.status(200).send(dbGenres);
    } catch (error) {
       res.status(404).send(`Error en la ruta /genres ${error}`);
    } 
});

module.exports = router;