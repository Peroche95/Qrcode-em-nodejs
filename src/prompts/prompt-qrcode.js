import chalk from "chalk"

const  promptQrCode = [
    {
        name: "link",
        description: chalk.blue.bold ("Digite o link para gerar o QrCode")
    },
    {
        name: "type",
        description: chalk.blue.bold( " Escolha entre o tipo Qrcode( 1- NORMAL ( 2- TERMINAL"),
        pattern: /^[1-2]+$/,
        requared: "true", 
        message : chalk.red.italic( "Escolha apenas 1 ou 2"),
    }, 
]

export default promptQrCode;