const speakeasy = require("speakeasy");
const qrcode = require("qrcode");
const fs = require("fs");

const secret = speakeasy.generateSecret({
  name: "WeAreDevs",
});

console.log(secret);

qrcode.toDataURL(secret.otpauth_url, (err, data) => {
  if (err) return console.error(err.message);
  fs.writeFileSync("example.html", `<img src='${data}'>`);
});
