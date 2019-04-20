module.exports = function (sequelize, DataTypes) {
    return sequelize.define('historico_administrador_producto', {
        idHistorico: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: "id_historico"
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
        idProducto: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            references: {
                model: 'producto',
                key: 'id_producto'
            },
            field: "id_producto"
        },
        movimiento: {
            type: DataTypes.STRING(25),
            allowNull: false
        },
        cambioRealizado: {
            type: DataTypes.STRING(25),
            allowNull: false,
            field: "cambio_realizado"
        },
        fechaMovimiento: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            field: "fecha_movimiento"
        }

    }, {
            tableName: 'historico_administrador_producto'
        });
};