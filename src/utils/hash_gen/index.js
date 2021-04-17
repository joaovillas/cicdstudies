import MD5 from "crypto-js/md5";
import SHA256 from "crypto-js/sha256";
import Base64 from 'crypto-js/enc-base64';
import Utf8 from "crypto-js/enc-utf8";

export function genMD5(text) {
  return MD5(text).toString();
}

export function genSHA256(text) {
  return SHA256(text).toString();
}

export function genTextWithoutHash(text) {
  return text;
}

export function genBase64 (text) {
  return Base64.stringify(Utf8.parse(text));
}