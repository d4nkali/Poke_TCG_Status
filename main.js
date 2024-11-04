const { app, BrowserWindow } = require('electron');

function createWindow() { //* Função para criar a janela do app

    const mainWindow = new BrowserWindow({

        width: 800,
        height: 600

    });

    mainWindow.loadFile('src/index.html'); // Abre o index.html na janela do app

}

app.whenReady().then(() => { //* Inicia o Electron e cria a janela

    createWindow();

    app.on('activate', () => {

        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }

    });

});

app.on('window-all-closed', () => { //* Função para fechar o app

    if (process.platform !== 'darwin') { //! Se o OS for qualquer um exceto o MacOS

        app.quit(); // Fechar aplicativo

    }

});
