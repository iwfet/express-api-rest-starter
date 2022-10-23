import bcrypt from "bcryptjs";
import {bycryptSalt} from "../infra/bcryptjs"


/* we are encrypting the password as hash to  save in database */
/* bcrypt is that the output of the genSalt function contains both 
the hash and the salt in one string. This means that you can store just the single item in your database, 
instead of two */
export const encryptPassword =async (plainPassword) => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(bycryptSalt,(err,salt)=>{
            if(err) return reject(err);
            bcrypt.hash(plainPassword, salt, (err, hash) => {
                (err ? reject(err) : (resolve(hash)));
            })
        })
    })
}
/* now check plain password and hashed password */
export const checkPassword = async (plainPassword, hash) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(plainPassword, hash, (err, res) => {
            (err ? reject(err) : resolve(res));
        })
    })
}


