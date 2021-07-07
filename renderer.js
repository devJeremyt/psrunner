const ipcRenderer = require("electron").ipcRenderer;

const runScriptBtn = document.querySelector('#runScriptBtn'),
    scriptSelection = document.querySelector('#scriptSelection');



runScriptBtn.addEventListener('click', ()=>{
    user = document.querySelector('#user')
    console.log('About to run script for ' + scriptSelection.value)
    ipcRenderer.send('runScript', [scriptSelection.value, scriptArg.value] )
})

ipcRenderer.on('openCSVReply', (event, file)=>{
    console.log(file);

    scriptArg.value = '"' + file.filePaths[0] + '"';
})

