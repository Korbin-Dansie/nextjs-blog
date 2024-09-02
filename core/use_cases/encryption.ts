var bcrypt = require('bcryptjs');
import crypto from "crypto"

const DB_SALT_LENGTH = 16;

export function genSalt(){
    let salt = new String(bcrypt.genSaltSync(10));

    if(salt.length > DB_SALT_LENGTH){
      return salt.substring(0, DB_SALT_LENGTH);
    }
    
    return salt;
}

export function cryptPassword(password, callback) {

   bcrypt.genSalt(10, function(err, salt) {
    if (err) 
      return callback(err);

    bcrypt.hash(password, salt, function(err, hash) {
      return callback(err, hash, salt);
    });
  });
};

export function comparePassword(plainPass, hashword, callback) {
   bcrypt.compare(plainPass, hashword, function(err, isPasswordMatch) {   
       return err == null ?
           callback(null, isPasswordMatch) :
           callback(err);
   });
};
