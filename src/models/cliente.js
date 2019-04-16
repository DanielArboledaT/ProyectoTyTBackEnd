/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cliente', {
    idCliente: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true, 
      autoIncrement: true,
      field: "id_cliente"
    },
    idVendedor: {
      type: DataTypes.INTEGER(11),
      references: {
        model: 'vendedor',
        key: 'id_vendedor'
      },
      field: "id_vendedor"
    },
    primerNombre: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: "primer_nombre"
      
    },
    segundoNombre: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: "segundo_nombre"
    },
    primerApellido: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: "primer_apellido"
    },
    segundoApellido: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: "segundo_apellido"
    },
    identificacion: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    nit: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    direccion: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    telefono: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    ciudad: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    departamento: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    nombreNegocio: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: "nombre_negocio"
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