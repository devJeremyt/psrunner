const ipcRenderer = require("electron").ipcRenderer;

const openBtn = document.querySelector('#openCSVBtn'),
    runScriptBtn = document.querySelector('#runScriptBtn'),
    scriptSelection = document.querySelector('#scriptSelection');

openBtn.addEventListener('click', ()=>{
    ipcRenderer.send('openCSV')
})

runScriptBtn.addEventListener('click', ()=>{
    user = document.querySelector('#user')
    console.log('About to run script for ' + scriptSelection.value)
    ipcRenderer.send('runScript', [scriptSelection.value, user.value] )
})

