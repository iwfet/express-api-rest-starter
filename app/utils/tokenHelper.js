import jwt from "jsonwebtoken"
import {jsonWebTokenKey} from "../infra/token"


/* there are many strategies to create token, check above mentioned URL for 
    more information. by default jsonwebtoken uses (HMAC SHA256) algorithm to create but you can chosoe 
    anyone of the mentioned algorithms on above URL
*/
export const createToken = async (data) => {
    /* token will be expired in 1 hour
    you can also use this expression expiresIn: 60 * 60 */
    return await jwt.sign(data, jsonWebTokenKey, { expiresIn: '1h' });
}

export const verifyToken = async (token) =>{
    return new Promise((resolve,reject)=>{
    jwt.verify(token, jsonWebTokenKey,(err,decoded)=>{
        (err ? reject(err) : resolve(decoded));
    })
    })
}