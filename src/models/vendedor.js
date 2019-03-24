module.exports = function(sequelize, DataTypes){

    return sequelize.define('vendedor', {

        idVendedor: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncremental: true,
            field: 'id_vendedor'
        },
        idImgPerfil: {
            type: DataTypes.INTEGER,
            field: 'id_img_perfil'
        },
        idAdmin: {
            type: DataTypes.INTEGER,
            field: 'id_administrador'
        },
        primerNombre: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'primer_nombre'
        },
        segundoNombre: {
            type: DataTypes.STRING,
            field: 'segundo_nombre'
        },
        primerApellido: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'primer_apellido'
        },
        segundoApellido: {
            type: DataTypes.STRING,
            field: 'segundo_apellido'
        },
        identificacion: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'identificacion'
        },
        direccion: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'direccion'
        },
        telefono: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'telefono'
        },
        ciudad: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'ciudad'
        },
        departamento: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'departamento'
        },
        fechaIngreso: {
            type: DataTypes.STRING,
            allowNull: false,   
            field: 'fecha_ingreso'
        },
        estado: {
            type: DataTypes.CHAR,
            allowNull: false,
            defaultValue: 'A',
            field: 'estado'
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'email'
        }
    },{
        tableName: 'vendedor'
    }
)

}