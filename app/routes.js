import { Router } from "express";
import {handle404Error,handleDevErrors  } from "./middlewares/errorHandlers"
import {routesUsuario} from "./routes/usuario"


export const routes = new Router();

// // Add headers before the routes are defined
routes.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE"  );
  res.setHeader("Access-Control-Allow-Headers","X-Requested-With,content-type"  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});


routes.use("/usuario",routesUsuario)

// routes.post("/usuario")




// error handler 404
routes.use(handle404Error);

// error handler
routes.use(handleDevErrors);
