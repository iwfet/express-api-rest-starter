import express from "express"
import cors from "cors"
import {routes} from "./routes"
import compression from "compression"
import cookieParser from "cookie-parser"
import bodyParser from "body-parser"
import {database} from "./database/conection"



class App {
    constructor(){
        this.server= express()      
        this.middleware()
        this.routes()
        database.getConetion() 
        this.modeloConstructor()
    
        
    }
    middleware(){
        this.server.use(express.json({limit: '100mb'}))
        this.server.use(cors())
        this.server.use(compression())
        this.server.use(bodyParser.json());
        this.server.use(bodyParser.urlencoded({ extended: false }));
        this.server.use(cookieParser());
    
       
    }
    routes(){
        this.server.use(routes)
    }

    async modeloConstructor(){
        try{
            await database.getDb().sync({alter:true}).then((d)=>{console.log('Database table model os created successfully')})
        }catch (error) {
            console.error(error)
        }
    }

    async closeDb(){
        try{
            await database.closeConetion()
        }catch (error) {
            console.error(error)
            throw new Error(error)
        }

    }
}

export default new App()