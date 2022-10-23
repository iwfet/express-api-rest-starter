import { UsuarioService } from "../services/usuarioService";
import {statusCode} from"../enum/statusCode"
import {errorException} from "../utils/execption"

class usuarioController{
 
    constructor(){
      
        this.teste ="111111111111111" 
    }
 
    async createUsuario(req, res){
        const {usuario,password}=req?.body
        if((!usuario) && (!password)){
            console.log(this.teste);
            res.statusCode =404
        
            return res.json(new errorException("Faltando usuario / password em body"))
        }
       
        // UsuarioService.createUsuario(req, res, next,)

        

    }

}
export const UsuarioController = new usuarioController()