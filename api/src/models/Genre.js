const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo correspondiente a la tabla genre
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('genre', {
       id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          allownull: false,
          primaryKey: true
    },
      name: {
          type: DataTypes.STRING
      }
  });
};