import MD5 from "crypto-js/md5";
import SHA256 from "crypto-js/sha256";

export function genMD5(text) {
  return MD5(text).toString();
}

export function genSHA256(text) {
  return SHA256(text).toString();
}

export function genTextWithoutHash(text) {
  return text;
}