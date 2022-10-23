import {  DataTypes, Model } from "@sequelize/core";
import {database} from"../database/conection"


export class Posts extends Model{}


Usuario.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descricao:{
        type: DataTypes.STRING(255),
        allowNull: false
    }

},{
    sequelize:database.getDb(),
    modelName: 'posts',
    timestamps: true
})