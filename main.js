const { app, BrowserWindow, Notification, ipcMain } = require('electron'),
        csvChooser = require('./js/csvChooser'),
        path = require('path');

let { exec } = require('child_process');
const { stderr } = require('process');

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

ipcMain.on('openCSV', (event)=>{
    let filePath = csvChooser.chooseCSV();

    filePath.then((file)=>event.sender.send('openCSVReply', file))
})

ipcMain.on('runScript', (event, args)=>{
    exec('connect-MsolService | ' + path.join(__dirname, "psscripts", args[0] +'.ps1 ') + args[1],{'shell':'powershell.exe'}, (error, stdout, stderr)=>{
        console.log(error)
        console.log(stderr)
        console.log(stdout)

        if(error == null){
            new Notification({title: "Script ran successfully", body: args[0] + ' ran without an error'}).show()
        }
    })
})

app.on('window-all-closed', ()=>{
    if (process.platform !== 'darwin') app.quit()
})