const { exec } = require('child_process');

// Utiliser un import dynamique pour le module 'open'
async function startServer() {
  const open = await import('open').then(module => module.default);

  // Chemin vers le fichier batch
  const batchFilePath = 'D:\\donnees\\Pictures\\start\\start-server.bat';

  // Exécuter la commande batch
  exec(`"${batchFilePath}"`, (err, stdout, stderr) => {
    if (err) {
      console.error(`Erreur : ${err.message}`);
      return;
    }
    if (stderr) {
      console.error(`Erreur stderr : ${stderr}`);
      return;
    }
    console.log(`stdout : ${stdout}`);

    // Ouvrir localhost après un certain délai

  });
}

// Appeler la fonction pour démarrer le serveur
startServer();
