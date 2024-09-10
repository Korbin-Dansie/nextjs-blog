var bcrypt = require("bcryptjs");
import crypto from "crypto";

const SALT_VALUE: number = 10;

/**
 *
 * @param {string} password Users password
 * @returns {Promise<string>} Returns the hased password
 */
export async function cryptPassword(password: string): Promise<string> {
  const myPromise: Promise<string> = new Promise((resolve, reject) => {
    bcrypt.genSalt(SALT_VALUE, function (err: string, salt: string) {
      if (err) {
        reject(err);
      }
      bcrypt.hash(password, salt, function (err: string, hash: string) {
        if (err) {
          reject(err);
        }
        resolve(hash);
      });
    });
  });
  return myPromise;
}

export async function comparePassword(password: string, hashword: string): Promise<boolean> {
  const myPromise: Promise<boolean> = new Promise((resolve, reject) => {
  bcrypt.compare(password, hashword, function (err: string, isPasswordMatch: boolean) {
      if(err == null){
        resolve(isPasswordMatch);
      }
      else{
        reject(err);
      }
    });
  });
  return myPromise;
}
