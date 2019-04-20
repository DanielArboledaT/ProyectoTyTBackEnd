module.exports = function (sequelize, DataTypes) {
    return sequelize.define('historico_administrador_vendedor', {
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
        idVendedor: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            references: {
                model: 'vendedor',
                key: 'id_vendedor'
            },
            field: "id_vendedor"

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
            tableName: 'historico_administrador_vendedor'
        });
};
