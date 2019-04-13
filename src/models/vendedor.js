/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vendedor', {
    idVendedor: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: "id_vendedor"
    },
    idImgPerfil: {
      type: DataTypes.INTEGER(11),
      references: {
        model: 'img_perfil',
        key: 'id_img_perfil'
      },
      field: "id_img_perfil"
      
    },
    idAdministrador: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'administrador',
        key: 'id_administrador'
      },
      field: "id_administrador"

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
    fechaIngreso: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: "fecha_ingreso"
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
    tableName: 'vendedor'
  });
};
