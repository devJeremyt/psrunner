const container = document.querySelector('#options'),
        optionsDiv = document.querySelector('#options')
        
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
    }
}

function loadSingleUserBlockSigninOptions(){
    optionsDiv.innerHTML = '<label for="user">User to be Blocked</label> <input type="text" name="user" id="user">'
}

function clearOptionsHTML(){
    optionsDiv.innerHTML = ''
}



