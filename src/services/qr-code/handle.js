import qr from "qrcode";
import chalk from "chalk";

async function handle(err, result) {
    if (err) {
        console.log(chalk.red.italic("Erro ao processar a entrada do usuário"));
        return;
    }


    try {
        console.log(chalk.green("QR Code gerado com sucesso:\n"));

        const qrcode = await qr.toString(result.link, {
            type: "terminal",
        });

        console.log(qrcode);
    } catch (error) {
        console.log(chalk.red("Erro ao gerar o QR Code:"), error);
    }
}

export default handle;
