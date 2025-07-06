module.exports = {
  executar: async ({
    client,
    msg: info,
    from,
    budy,
    isCmd,
    cmdName,
    args,
    q,
    sender,
    prefix,
    groupMembers,
    isGroup,
    isGroupAdmins,
    reply,
    isMedia,
    isQuotedSticker,
    isQuotedImage,
    isQuotedVideo,
    isQuotedAudio,
    isQuotedDocument,
    getFileBuffer,
    getRandom,
    getExtension,
    fs
  }) => {

    if (!isGroup) return reply('Este comando só deve ser utilizado em Grupo.');
    if (!isGroupAdmins) return reply('Você precisa ser ADM pra utilizar este comando.');
    if (q.includes(`${prefix}`)) return reply("Não pode utilizar comandos nesse comando.");
    if (q.includes("=>") || q.includes(">")) return;

    const membros = (membros1) => membros1.map(m => m.id);
    const yd = membros(groupMembers);

    if ((isMedia && !info.message.videoMessage || isQuotedSticker) && args.length == 0) {
      const media = isQuotedSticker
        ? info.message.extendedTextMessage?.contextInfo?.quotedMessage?.stickerMessage
        : info.message.stickerMessage;

      if (!media) return reply('Nenhum sticker encontrado.');

      const rane = getRandom('.' + await getExtension(media.mimetype));
      const img = await getFileBuffer(media, 'sticker');
      fs.writeFileSync(rane, img);
      const fig = fs.readFileSync(rane);
      await client.sendMessage(from, { sticker: fig, mentions: yd });
      fs.unlinkSync(rane);

    } else if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
      const media = isQuotedImage
        ? info.message.extendedTextMessage?.contextInfo?.quotedMessage?.imageMessage
        : info.message.imageMessage;

      if (!media) return reply('Nenhuma imagem encontrada.');

      const rane = getRandom('.' + await getExtension(media.mimetype));
      const img = await getFileBuffer(media, 'image');
      fs.writeFileSync(rane, img);
      const buff = fs.readFileSync(rane);
      await client.sendMessage(from, { image: buff, mentions: yd }, { quoted: info });
      fs.unlinkSync(rane);

    } else if ((isMedia && !info.message.videoMessage || isQuotedVideo) && args.length == 0) {
      const media = isQuotedVideo
        ? info.message.extendedTextMessage?.contextInfo?.quotedMessage?.videoMessage
        : info.message.videoMessage;

      if (!media) return reply('Nenhum vídeo encontrado.');

      const rane = getRandom('.' + await getExtension(media.mimetype));
      const vid = await getFileBuffer(media, 'video');
      fs.writeFileSync(rane, vid);
      const buff = fs.readFileSync(rane);
      await client.sendMessage(from, { video: buff, mimetype: 'video/mp4', mentions: yd }, { quoted: info });
      fs.unlinkSync(rane);

    } else if ((isMedia && !info.message.videoMessage || isQuotedAudio) && args.length == 0) {
      const media = isQuotedAudio
        ? info.message.extendedTextMessage?.contextInfo?.quotedMessage?.audioMessage
        : info.message.audioMessage;

      if (!media) return reply('Nenhum áudio encontrado.');

      const rane = getRandom('.' + await getExtension(media.mimetype));
      const aud = await getFileBuffer(media, 'audio');
      fs.writeFileSync(rane, aud);
      const buff = fs.readFileSync(rane);
      await client.sendMessage(from, { audio: buff, mimetype: 'audio/mp4', ptt: true, mentions: yd }, { quoted: info });
      fs.unlinkSync(rane);

    } else if ((isMedia && !info.message.videoMessage || isQuotedDocument) && args.length == 0) {
      const media = isQuotedDocument
        ? info.message.extendedTextMessage?.contextInfo?.quotedMessage?.documentMessage
        : info.message.documentMessage;

      if (!media) return reply('Nenhum documento encontrado.');

      const rane = getRandom('.' + await getExtension(media.mimetype));
      const doc = await getFileBuffer(media, 'document');
      fs.writeFileSync(rane, doc);
      const buff = fs.readFileSync(rane);
      await client.sendMessage(from, { document: buff, mimetype: 'text/plain', mentions: yd }, { quoted: info });
      fs.unlinkSync(rane);

    } else if (budy) {
      if (q.length < 1) return reply('Citar oq?');
      await client.sendMessage(from, { text: q, mentions: yd });
    } else {
      reply(`Responder imagem/documento/gif/adesivo/áudio/vídeo com legenda ${prefix + cmdName}`);
    }

  }
};
