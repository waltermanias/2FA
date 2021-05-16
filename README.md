#2FA with Speakeasy

This solution is a POC to test Speakeasy.

## Generate a QR Code

The next command will generate a QR code that you may scan with your phone.

`node index.js`

After the command was run, you will find a file called `example.html` in the project root. Open it in your preferred web browser and scan it with the Google Authenticator app installed on your phone.

## Verify the TOTP 2FA code

Run the next command with the code that will appear in Google Authenticator App.

`node verify.js`

You will see `true` or `false` according to the code you have put in the code in your console.

Happy coding! 🤓