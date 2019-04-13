/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('img_perfil', {
    idImgPerfil: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: "id_img_perfil"
    },
    url: {
      type: DataTypes.STRING(500),
      allowNull: true
    }
  }, {
    tableName: 'img_perfil'
  });
};
