import { Router } from "express";
import {UsuarioController} from "../controllers/usuarioController"
import { handleExceptions} from "../middlewares/errorHandlers"


export const routesUsuario = new Router();




routesUsuario.post("/crete-usuario",handleExceptions(UsuarioController.createUsuario.bind(UsuarioController)))

routesUsuario.post("/login",handleExceptions(UsuarioController.login.bind(UsuarioController)))





