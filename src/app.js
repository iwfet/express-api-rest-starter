import express from "express"

import cors from "cors"
import routes from "./routes"







class App {
    constructor(){
        this.server= express()      
        this.middleware()
        this.routes()
    
        
    }
    middleware(){
        this.server.use(express.json({limit: '100mb'}))
        this.server.use(cors())
       
    }
    routes(){
        this.server.use(routes)
    }
}

export default new App()