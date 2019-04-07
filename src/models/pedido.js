/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pedido', {
    id_pedido: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    id_codigo_pedido: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'codigo_pedido',
        key: 'id_codigo_pedido'
      }
    },
    id_producto: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'producto',
        key: 'id_producto'
      }
    },
    cantidad: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    descuento_individual: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    tableName: 'pedido'
  });
};
