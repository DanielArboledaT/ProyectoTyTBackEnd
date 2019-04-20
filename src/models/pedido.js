/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pedido', {
    idPedido: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: "id_pedido"
    },
    idCodigoPedido: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'codigo_pedido',
        key: 'id_codigo_pedido'
      },
      field: "id_codigo_pedido"
    },
    idProducto: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'producto',
        key: 'id_producto'
      },
      field: "id_producto"
    },
    cantidad: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    descuento: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    tableName: 'pedido'
  });
};
