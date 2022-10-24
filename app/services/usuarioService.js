import { UsuarioRepository } from "../repository/usuarioRepository"
import {statusCode} from"../enum/statusCode"
import {errorException} from "../utils/execption"
import {encryptPassword} from "../utils/bcrypt"

import { Usuarios } from "../schema/usuariosSchema"


class usuarioService{
    #usuarioRepository
    constructor(usuarioRepository){    
        this.#usuarioRepository= usuarioRepository
    }

    async createUsuario(req,res,next,user,password){
        if (password.length <= 6 && password.length >=255){
            return res.status(statusCode.ClientErrorBadRequest)
            .json(new errorException("Password must be at least 6 characters long"))
        }
        const usuarioExite =  await this.#usuarioRepository.buscaUsuarioExistenteBolean(user)
        if(usuarioExite){
            res.statusCode = statusCode.ClientErrorNotAcceptable
            return res.json(new errorException("User already exists") )
        }
        const hashPassword = await encryptPassword(password)
        await this.#usuarioRepository.createUsuario(user,hashPassword)

        return  res.status(statusCode.SuccessCreated)
        .json({message:"User created successfully"}) 
    }
}
export const UsuarioService = new usuarioService(UsuarioRepository) 