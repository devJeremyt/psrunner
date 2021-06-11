const { dialog } = require('electron')

const chooseCSV = ()=>{
   return dialog.showOpenDialog({
        title: "Choose a CSV",
        buttonLabel: "Select",
        filters: [
            {name: 'CSV', extensions: ['csv']}
        ],
        properties: ["openFile", "dontAddToRecent",]
    });

}

exports.chooseCSV = chooseCSV