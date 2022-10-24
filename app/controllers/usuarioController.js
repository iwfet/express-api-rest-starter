import { UsuarioService } from "../services/usuarioService";
import {statusCode} from"../enum/statusCode"
import {errorException} from "../utils/execption"

class usuarioController{
    #statusCode
    #usuarioService
    constructor(statusCode,usuarioService){
        this.#statusCode = statusCode
        this.#usuarioService=usuarioService
        
    }
 
    async createUsuario(req,res,next){
        const {usuario,password}=req?.body
        if((!usuario) && (!password)){
            
            res.statusCode =this.#statusCode.ClientErrorBadRequest
            return res.json(new errorException("Faltando usuario / password "))
        }
        this.#usuarioService.createUsuario(req,res,next,usuario,password)  
    }

  
}



export const UsuarioController = new usuarioController(statusCode,UsuarioService)