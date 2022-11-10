require('dotenv').config();
const { Sequelize, Op } = require('sequelize');
const fs = require('fs');
const axios = require('axios');
const path = require('path');
const {DB_USER, DB_PASSWORD, DB_HOST, API_KEY, DB_NAME} = process.env;
let sequelize = 
  process.env.NODE_ENV === "videogames"
  ? new Sequelize({
    database: DB_NAME,
    dialect: 'postgres',
    host: DB_HOST,
    port: 5432,
    username: DB_USER,
    password: DB_PASSWORD,
    pool: {
      max: 3,
      min: 1,
      idle: 10000,
    },
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
      keepAlive: true,
    },
    ssl: true,
  })
  : new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/videogames`,
    { loggin: false, native: false }
  );

// const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/videogames`, {
//   logging: false, // set to console.log to see the raw SQL queries
//   native: false, // lets Sequelize know we can use pg-native for ~30% more speed
// });
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring.
//Poner en mayuscula la 1er letra del modelo porque esto se hizo cuando se armo el sequelize.models
const { Videogame, Genre } = sequelize.models;

// Aca vendrian las relaciones
Videogame.belongsToMany(Genre, {through: 'vgame_genre'});
Genre.belongsToMany(Videogame, {through: 'vgame_genre'});

//Populate Genres table with Api genres 
const popgenres = async () => { 
      const apigenres = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
      const genres = apigenres.data.results.map(p => p.name)
   // Add all genres to the Database
      genres.forEach(p => {
          Genre.findOrCreate({
               where: {name: p}
          })
      })
}     
popgenres();

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importar la conexión { conn } = require('./db.js');
  apikey : API_KEY,
  Op
};
