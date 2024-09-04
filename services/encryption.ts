var bcrypt = require("bcryptjs");
import crypto from "crypto";

const SALT_VALUE: number = 10;

/**
 *
 * @param {string} password Users password
 * @returns {Promise<string>} Returns the hased password
 */
export async function cryptPassword(password): Promise<string> {
  const myPromise: Promise<string> = new Promise((resolve, reject) => {
    bcrypt.genSalt(SALT_VALUE, function (err, salt) {
      if (err) {
        reject(err);
      }
      bcrypt.hash(password, salt, function (err, hash: string) {
        if (err) {
          reject(err);
        }
        resolve(hash);
      });
    });
  });
  return myPromise;
}

export function comparePassword(password, salt, hashword, callback) {
  bcrypt.compare(password + salt, hashword, function (err, isPasswordMatch) {
    return err == null ? callback(null, isPasswordMatch) : callback(err);
  });
}
