const fs = require("fs")
module.exports = {
  executar: async ({
    client,
    msg,
    args,
    isGroup,
    isGroupAdmins,
    isBotGroupAdmins,
    sender,
    comando,
    reply,
    latensi,
    pushname,
    from
  }) => {
  
client.sendMessage(from, {text:`💦 Velocidade de resposta ${latensi.toFixed(4)} segundos `})

  }
};

