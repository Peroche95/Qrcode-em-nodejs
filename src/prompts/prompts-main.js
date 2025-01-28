const mainPrompt = [
    {
        name: "select",
        description: "Escolha a ferramenta ( 1 - QRCODE ou ( 2- PASSWORD",
        pattern: /^[1-2]+$/,
        message: "Escolha entre 1 e 2",
        required: true,
    }
];

export default mainPrompt;