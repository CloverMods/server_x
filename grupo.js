module.exports = {
  executar: async ({
    from,
    client,
    args,
    isGroup,
    isGroupAdmins,
    isBotGroupAdmins,
    reply
  }) => {
        if (!isGroup) return reply(`SÓ EM GRUPO`)
        if (!isGroupAdmins) return reply(`PRECISA SER ADMININASTROR`)
        if (!isBotGroupAdmins) return reply(`BOT PREPRECISA SER ADMININASTROR`)
        if (args[0] === 'a') {
          reply(`*GRUPO ABERTO COM SUCESSO*`)
          await client.groupSettingUpdate(from, 'not_announcement')
        } else if (args[0] === 'f') {
          reply(`*GRUPO FECHADO COM SUCESSO*`)
          await client.groupSettingUpdate(from, 'announcement')
        }
  }
};