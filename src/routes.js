import { Router } from "express";
import routesTeste from "./routerTeste"


const routes = new Router();

// // Add headers before the routes are defined
routes.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE"  );
  res.setHeader("Access-Control-Allow-Headers","X-Requested-With,content-type"  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});


routes.get("/",  (req,res)=>{
  return res.send("dsdjsdghsdhjs")
})

routes.use("/teste",routesTeste)


routes.use((req, res, next) => {
    const erro = new Error("Not found");
    erro.status = 404;
    next(erro);
});
  
routes.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.json({
    erro: {
      mensagem: error.message,
      stack:error.stacks
    },
  });

});







export default routes;
