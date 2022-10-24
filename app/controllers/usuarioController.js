import { UsuarioService } from "../services/usuarioService";
import {statusCode} from"../enum/statusCode"
import {errorException} from "../utils/execption"

class usuarioController{
    #usuarioService
    constructor(usuarioService){
        this.#usuarioService=usuarioService
    }
 
    async createUsuario(req,res,next){
        const {usuario,password}=req?.body
        if((!usuario) && (!password)){
            return res.status(statusCode.ClientErrorBadRequest)
            .json(new errorException("Faltando usuario / password "))
        }
        return  this.#usuarioService.createUsuario(req,res,next)  
    }

    async login(req,res,next){
        const {usuario,password}=req?.body
        if((!usuario) && (!password)){
            return res.status(statusCode.ClientErrorBadRequest)
            .json(new errorException("Faltando usuario / password "))
        }
        return this.#usuarioService.login(req,res,next)
    }

  
}



export const UsuarioController = new usuarioController(UsuarioService)