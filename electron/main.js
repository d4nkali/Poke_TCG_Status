const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

//* Criação da janela do app
app.on('ready', () => {
    mainWindow = new BrowserWindow({

        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
            enableRemoteModule: false,
        },

    });

    mainWindow.loadURL('http://localhost:5173'); // Abre no servidor do Vite

});

app.on('window-all-closed', () => { //* Função para fechar o app

    if (process.platform !== 'darwin') { //! Se o OS for qualquer um exceto o MacOS

        app.quit(); // Fechar aplicativo

    }

});
