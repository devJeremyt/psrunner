const container = document.querySelector('#options'),
        optionsDiv = document.querySelector('#options'),
        scriptArg = document.querySelector('#scriptArg')
        
let selectedScript = undefined;

console.log(selectedScript);


scriptSelection.addEventListener('change', (event)=>{
    selectedScript = event.target.value
    reloadOptionsHTML();
})

function reloadOptionsHTML(){
    if(selectedScript == "singleBlockSignin"){
        clearOptionsHTML()
        loadSingleUserBlockSigninOptions()
    }else if (selectedScript == 'multiBlockSignin'){
        clearOptionsHTML()
        loadMultiUserBlockSigninOptions()
        loadMultiUserOpenCSVBtnListener();
    }
}

function loadSingleUserBlockSigninOptions(){
    optionsDiv.innerHTML = '<label for="user">User to be Blocked</label> <input type="text" name="user" id="user">'
    let user = document.querySelector('#user')

    user.addEventListener('input', (event)=>{
        scriptArg.value = user.value;
    })
}

function loadMultiUserBlockSigninOptions(){
    optionsDiv.innerHTML = '<h2>Choose csv with users to block</h2> <button id="openCSVBtn">Open CSV</button>'
}

function loadMultiUserOpenCSVBtnListener(){
    openBtn = document.querySelector('#openCSVBtn')
    openBtn.addEventListener('click', ()=>{
        let response = ipcRenderer.send('openCSV')
        console.log(response)
    })
}

function clearOptionsHTML(){
    optionsDiv.innerHTML = ''
}



