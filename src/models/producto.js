/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('producto', {
    idProducto: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: "id_producto"
    },
    nombre: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    nit: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    precio: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    impuesto: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    cantidad: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'producto'
  });
};
