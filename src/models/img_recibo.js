/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('img_recibo', {
    id_img_recibo: {
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
    url: {
      type: DataTypes.STRING(500),
      allowNull: true
    }
  }, {
    tableName: 'img_recibo'
  });
};
