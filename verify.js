const speakeasy = require("speakeasy");

const verified = speakeasy.totp.verify({
  secret: "KQYTUXKHNBQWYNLDF56USMKFOYVCC3DQKQ7CGZKKEEYGELDQME2Q",
  encoding: "base32",
  token: "668956",
  window: 2
});

console.log(verified);
