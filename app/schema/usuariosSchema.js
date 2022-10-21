import {  DataTypes, Model } from "@sequelize/core";
import {database} from"../database/conection"


export class Usuarios extends Model{}


Usuario.init({
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
    token:{
        type: DataTypes.STRING(60),
        allowNull: false
    }

},{
    sequelize:database.getDb(),
    modelName: 'usuarios',
    timestamps: true
})