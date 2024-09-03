var bcrypt = require('bcryptjs');
import crypto from "crypto"


const DB_SALT_LENGTH = 16;
const SALT_VALUE = 10;

export function genSalt(): string{
    // let salt: string = bcrypt.genSaltSync(SALT_VALUE);
    let salt = crypto.randomBytes(16).toString("hex");

    if(salt.length > DB_SALT_LENGTH){
      return salt.substring(0, DB_SALT_LENGTH);
    }
    
    return salt;
}

export function cryptPassword(password, salt) {
    let hash: string = bcrypt.hashSync(password + salt, SALT_VALUE);
    return hash;
};

export function comparePassword(password, salt, hashword, callback) {
   bcrypt.compare(password + salt, hashword, function(err, isPasswordMatch) {   
       return err == null ?
           callback(null, isPasswordMatch) :
           callback(err);
   });
};
