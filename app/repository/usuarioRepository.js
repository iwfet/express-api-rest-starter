import { Usuarios } from "../schema/usuariosSchema"




class usuarioRepository{
    #usuarioSchema
    constructor(usuarioSchema){
        this.#usuarioSchema = usuarioSchema
    }
    async buscaUsuarioExistenteBolean(user){
        const usuario = await this.#usuarioSchema.findOne({where:{user}})
        return !!usuario
    }
    async buscaUsuario(user){
        return await this.#usuarioSchema.findOne({where:{user}})
    }
    async createUsuario(user,password){
        return await this.#usuarioSchema.create({user,password})
    }
}

export const UsuarioRepository = new usuarioRepository(Usuarios);