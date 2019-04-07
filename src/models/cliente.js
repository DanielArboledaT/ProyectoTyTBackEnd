/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cliente', {
    id_cliente: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    id_vendedor: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'vendedor',
        key: 'id_vendedor'
      }
    },
    primer_nombre: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    segundo_nombre: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    primer_apellido: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    segundo_apellido: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    identificacion: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    nit: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    direccion: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    telefono: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    ciudad: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    departamento: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    nombre_negocio: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    estado: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: 'A'
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    tableName: 'cliente'
  });
};