/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vendedor', {
    id_vendedor: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    id_img_perfil: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'img_perfil',
        key: 'id_img_perfil'
      }
    },
    id_administrador: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'administrador',
        key: 'id_administrador'
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
    fecha_ingreso: {
      type: DataTypes.DATEONLY,
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
    tableName: 'vendedor'
  });
};
