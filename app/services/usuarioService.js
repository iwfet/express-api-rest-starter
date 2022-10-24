import { UsuarioRepository } from "../repository/usuarioRepository"
import {statusCode} from"../enum/statusCode"
import {errorException} from "../utils/execption"
import {encryptPassword,checkPassword} from "../utils/bcrypt"
import { createToken } from "../utils/tokenHelper"


class usuarioService{
    #usuarioRepository
    constructor(usuarioRepository){    
        this.#usuarioRepository= usuarioRepository
    }

    async createUsuario(req,res,next){
        const {usuario,password}=req?.body
        if (password.length <= 6 && password.length >=255){
            return res.status(statusCode.ClientErrorBadRequest)
            .json(new errorException("Password must be at least 6 characters long"))
        }
        const usuarioExite =  await this.#usuarioRepository.buscaUsuarioExistenteBolean(usuario)
        if(usuarioExite){
            res.statusCode = statusCode.ClientErrorNotAcceptable
            return res.json(new errorException("User already exists") )
        }
        const hashPassword = await encryptPassword(password)
        await this.#usuarioRepository.createUsuario(usuario,hashPassword)

        return  res.status(statusCode.SuccessCreated)
        .json({message:"User created successfully"}) 
    }


    async login(req,res,next){
        const {usuario,password}=req?.body
        const userData = await this.#usuarioRepository.buscaUsuario(usuario)
        if (!userData){
            return res.status(statusCode.ClientErrorUnauthorized)
            .json(new errorException("User / password invalid."))
        }
        const isValidPassword = await checkPassword(password, userData.getDataValue("password"));
        if (!isValidPassword){
            return res.status(statusCode.ClientErrorUnauthorized)
            .json(new errorException("User / password invalid."));
        }
        const token = await  createToken({id:userData.getDataValue("id")})
        return res.status(statusCode.SuccessOK).json({token})
    }
}
export const UsuarioService = new usuarioService(UsuarioRepository) 