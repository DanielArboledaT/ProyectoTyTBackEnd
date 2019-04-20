/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('codigo_pedido', {
    idCodigoPedido: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: "id_codigo_pedido"
    },
    idCliente: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'cliente',
        key: 'id_cliente'
      },
      field: "id_cliente"
    },
    idVendedor: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'vendedor',
        key: 'id_vendedor'
      },
      field: "id_vendedor"
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
