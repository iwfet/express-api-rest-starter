import { logger } from "../log"
import "dotenv/config"

export const handleExceptions = fn=> 
    (req,res, next)=> {
        fn(req, res)
        .catch((error) => { next(error) })
}

export const  handle404Error = async (req, res) => {
   res.status(404).json({  erro: {  mensagem: "please check URL", stack:null }});
}

export const handleDevErrors= async (err, req, res, next) => {
    /* log the error using winston for all production errors */
    logger.error(err.stack);
    /* this is for pure API base */
    if (process.env.NODE_ENV === 'development') { 
      return res.status(500).json({ erro: {  mensagem: "Internal server error.", stack:err?.stack  } }); 
    }
    res.status(500).json({ erro: {  mensagem: 'Internal server error.', stack:null }});
  }