const { app, BrowserWindow, ipcMain } = require('electron'),
        csvChooser = require('./js/csvChooser');

function createWindow(){
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
          }
    })

    win.loadFile('index.html')
    win.webContents.openDevTools() //Comment out not to see DevTools
}

app.whenReady().then(()=>{
    createWindow()
})

ipcMain.on('openCSV', ()=>{
    csvChooser.chooseCSV();
})

app.on('window-all-closed', ()=>{
    if (process.platform !== 'darwin') app.quit()
})