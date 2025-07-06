const fs = require("fs")
module.exports = {
  executar: async ({
      client,
      msg: info,
      from,
      budy,
      body,
      isCmd,
      cmdName,
      argString,
      allArgs,
      args,
      tescuk,
      textMessage,
      q,
      sender,
      pushname,
      isGroup,
      groupMetadata,
      groupName,
      groupDesc,
      groupMembers,
      groupAdmins,
      isGroupAdmins,
      isBot,
      isBotGroupAdmins,
      isOwner,
      antilink,
      isAntilink,
      welkom,
      isWelkom,
      type,
      content,
      mime,
      isImage,
      isVideo,
      isAudio,
      isSticker,
      isContact,
      isLocation,
      isProduct,
      isMedia,
      isQuotedMsg,
      typeMessage,
      getFileBuffer,
      mentions,
      latensi,
      resposta,
      prefix,
      fullBody,
      numeroBot,
      numeroDono
  }) => {
        const participants = isGroup ? await groupMetadata.participants : ''
        if (!isGroup) return reply(resposta.group)
        if (!isGroupAdmins) return reply(resposta.adm)
        let metadata = await client.groupMetadata(from)
        let teks = `
\n ${metadata.participants.length ? metadata.participants.length : "undefined"} participantes do grupo
\n ${args.join(" ") ? args.join(" ") : groupName}\n\n`
        for (let mem of participants) {
          teks += `┃❖ @${mem.id.split('@')[0]}\n`
        }
        client.sendMessage(from, { text: teks, mentions: participants.map(a => a.id) }, { quoted: info })
  }
};