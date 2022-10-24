import {  DataTypes, Model } from "@sequelize/core";
import {database} from"../database/conection"


export class Usuarios extends Model{}


Usuarios.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user:{
        type:DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password:{
        type: DataTypes.STRING(255),
        allowNull: false
    },
    token:{
        type: DataTypes.STRING(60),
        allowNull: true
    }

},{
    sequelize:database.getDb(),
    modelName: 'usuarios',
    timestamps: true
})