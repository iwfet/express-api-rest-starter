import {statusCode} from"../enum/statusCode"

class usuarioService{
    #statusCode
    constructor(statusCode){
        this.#statusCode = statusCode
    }

    async createUsuario(req,res,next,usuario,password){
      
        return res.json({status: true})
        
    }
}
export const UsuarioService = new usuarioService(statusCode) 