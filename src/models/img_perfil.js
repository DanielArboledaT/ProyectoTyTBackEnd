/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('img_perfil', {
    id_img_perfil: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    url: {
      type: DataTypes.STRING(500),
      allowNull: true
    }
  }, {
    tableName: 'img_perfil'
  });
};
