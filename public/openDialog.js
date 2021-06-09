const ipcRenderer = require("electron").ipcRenderer;

const openBtn = document.querySelector('#openCSVBtn');

openBtn.addEventListener('click', ()=>{
    ipcRenderer.send('openCSV')
})