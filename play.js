const fs = require("fs");
const fetch = require("node-fetch"); 

module.exports = {
  executar: async ({
    client,
    msg: info,
    reply,
    q,
    from,
    sender,
    prefix
  }) => {

    if (!q) {
      return client.sendMessage(from, {
        text: `˖⸙̭❛✰❤️ | Coloque o nome da música para baixar`
      });
    }
    reply("procurando...")
    try {
      const searchUrl = `https://anikit-pzax.onrender.com/pesquisayt?query=${encodeURIComponent(q)}&key=Lady-Bot&username=Lady-Bot`;
      const response = await fetch(searchUrl);
      if (!response.ok) throw new Error(`Erro na pesquisa do YouTube: ${response.status}`);
      const results = await response.json();
      if (!Array.isArray(results) || results.length === 0) {
        return client.sendMessage(from, { text: `Nenhum resultado encontrado para: ${q}` });
      }
      const videoUrl = results[0].url;
      // Download do vídeo
      const downloadUrl = `https://anikit-pzax.onrender.com/api/ytdl?url=${encodeURIComponent(videoUrl)}&key=Lady-Bot&username=Lady-Bot`;
      const downloadResponse = await fetch(downloadUrl);
      if (!downloadResponse.ok) throw new Error(`Erro ao gerar download: ${downloadResponse.status}`);
      const downloadData = await downloadResponse.json();
      const downloadLink = downloadData?.data?.video?.[0]?.downloadLink;
      if (!downloadLink) {
        return client.sendMessage(from, { text: `Não foi possível obter o link do vídeo.` });
      }
      await client.sendMessage(from, {
        video: { url: downloadLink },
        mimetype: 'video/mp4'
      }, { quoted: info });
    } catch (err) {
      console.error('Erro:', err.message);
      client.sendMessage(from, {
        text: `⚠️ Ocorreu um erro: ${err.message}`
      });
    }

  }
};
