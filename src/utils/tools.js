const CryptoJS = require('crypto-js');

/**
 * Decrypt AES ciphertext
 * @param {String} ciphertext to decrypt
 * @param {String} key
 * @returns String utf8 plaintext
 */
export const decryptAES = (ciphertext, key) => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, key);
  return bytes.toString(CryptoJS.enc.Utf8);
};

/**
 * Encrypt AES message
 * @param {String} key
 * @param {String} message to encrypt
 * @returns String AES Encrypted
 */
export const encryptAES = (message, key) => (
  CryptoJS.AES.encrypt(message, key).toString()
);
