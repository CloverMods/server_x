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

  const arquivos = [
    new GithubApiUpdater({
    branch: 'main',
    owner: 'CloverMods',
    repo: 'server_x',
    path: 'arquivo2.js',
    destino: './comandos/arquivo2.js'
    }),
    new GithubApiUpdater({
    branch: 'main',
    owner: 'CloverMods',
    repo: 'server_x',
    path: 'atualizar.js',
    destino: './comandos/atualizar.js'
    }),
    new GithubApiUpdater({
    branch: 'main',
    owner: 'CloverMods',
    repo: 'server_x',
    path: 'totag.js',
    destino: './comandos/totag.js'
    }),
    new GithubApiUpdater({
    branch: 'main',
    owner: 'CloverMods',
    repo: 'server_x',
    path: 'play.js',
    destino: './comandos/play.js'
    }),
    new GithubApiUpdater({
    branch: 'main',
    owner: 'CloverMods',
    repo: 'server_x',
    path: 'grupo.js',
    destino: './comandos/grupo.js'
    }),
    new GithubApiUpdater({
    branch: 'main',
    owner: 'CloverMods',
    repo: 'server_x',
    path: 'ping.js',
    destino: './comandos/ping.js'
    }),
    new GithubApiUpdater({
    branch: 'main',
    owner: 'CloverMods',
    repo: 'server_x',
    path: 'marcar.js',
    destino: './comandos/marcar.js'
    }),
    new GithubApiUpdater({
    branch: 'main',
    owner: 'CloverMods',
    repo: 'server_x',
    path: 'arquivo1.js',
    destino: './comandos/arquivo1.js'
    })
  ];

  for (const updater of arquivos) {
    await updater.verificarEbaixar();
  }

  reply('Todos os arquivos verificados!');
  
  })
  }
};
