import { statusCode } from "../enum/statusCode";
import { errorException } from "../utils/execption";
import { verifyToken } from "../utils/tokenHelper";


export const auth = async(req, res,next)=>{
    try{
        const tokenReq = req?.headers?.authorization
        if(!tokenReq && !tokenReq?.split("Bearer ")[1]){
            return res.status(statusCode.ClientErrorUnauthorized)
            .json(new errorException("Token requeride or missing 'Bearer '"))
        }
        const token = await verifyToken(tokenReq?.split("Bearer ")[1]);
        res.token = token
        return next()
    }catch(error){
        if(error.name === 'TokenExpiredError'){
            return res.status(statusCode.ClientErrorPaymentRequired)
            .json(new errorException('token expired'));
        }else if(error.name === 'JsonWebTokenError'){
            return res.status(statusCode.ClientErrorForbidden)
            .json(new errorException("Token invalid"))
        }        
        throw new Error(error.message)
    }
}

