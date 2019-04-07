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
    descuento_global: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    tableName: 'codigo_pedido'
  });
};
