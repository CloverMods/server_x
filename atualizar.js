const fs = require("fs")
const GithubApiUpdater = require('atualiz-git');
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
    pushname,
    from
  }) => {

(async () => {
  const updater = new GithubApiUpdater({
    branch: 'main',
    owner: 'CloverMods',
    repo: 'server_x',
    path: 'arquivo1.js',
    destino: './comandos/arquivo1.js'
  },
  {
    branch: 'main',
    owner: 'CloverMods',
    repo: 'server_x',
    path: 'marcar.js',
    destino: './comandos/marcar.js'
  },  
  {
    branch: 'main',
    owner: 'CloverMods',
    repo: 'server_x',
    path: 'ping.js',
    destino: './comandos/ping.js'
  },
  {
    branch: 'main',
    owner: 'CloverMods',
    repo: 'server_x',
    path: 'grupo.js',
    destino: './comandos/grupo.js'
  },
  {
    branch: 'main',
    owner: 'CloverMods',
    repo: 'server_x',
    path: 'play.js',
    destino: './comandos/play.js'
  },
  {
    branch: 'main',
    owner: 'CloverMods',
    repo: 'server_x',
    path: 'totag.js',
    destino: './comandos/totag.js'
  },
  {
    branch: 'main',
    owner: 'CloverMods',
    repo: 'server_x',
    path: 'atualizar.js',
    destino: './comandos/atualizar.js'
  },
  {
    branch: 'main',
    owner: 'CloverMods',
    repo: 'server_x',
    path: 'arquivo2.js',
    destino: './comandos/arquivo2.js'
  });
  await updater.verificarEbaixar();
})();

client.sendMessage(from, {text: "atualização concluída"})
  
  }
};
