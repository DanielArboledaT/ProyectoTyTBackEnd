/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('codigo_pedido', {
    id_codigo_pedido: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    id_cliente: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'cliente',
        key: 'id_cliente'
      }
    },
    id_vendedor: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'vendedor',
        key: 'id_vendedor'
      }
    },
    idAdministrador: {
      type: DataTypes.INTEGER(11),
      references: {
        model: 'administrador',
        key: 'id_administrador'
      },
      field: "id_administrador"
    },
    fechaCreacion: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: "fecha_creacion"
    },
    fechaEntrega: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: "fecha_entrega"
    }
  }, {
    tableName: 'codigo_pedido'
  });
};
