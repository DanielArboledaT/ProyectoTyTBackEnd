module.exports = function (sequelize, DataTypes) {
    return sequelize.define('historico_administrador_pedido', {
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
        idPedido: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            references: {
                model: 'pedido',
                key: 'id_pedido'
            },
            field: "id_pedido"
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
        },
        fechaCumplido: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            field: "fecha_cumplido"
        }

    }, {
            tableName: 'historico_administrador_pedido'
        });
};