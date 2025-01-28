import prompt from "prompt";
import mainPrompt from "./prompts/prompts-main.js"
import createQrCode from "./services/qr-code/create-qrcode.js";
import createPassword from "./services/password/createpassword.js"

async function main(){
    prompt.get( mainPrompt, async ( err , result) => {
        if ( result.select == 1) await createQrCode();
        if ( result.select == 2) await createPassword();
    });
    
    prompt.start();
}

main();