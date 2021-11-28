const {app, Menu, BrowserWindow, dialog} = require('electron')
    const url = require("url");
    const path = require("path");

    const isMac = process.platform === 'darwin'

    let mainWindow

    function createWindow () {
      mainWindow = new BrowserWindow({
        "fullscreenable":true,
        "title": "Picko",
        webPreferences: {
          contextIsolation: false,
          nodeIntegration: true,
          nodeIntegrationInWorker: true,
          backgroundThrottling: false,
          enableRemoteModule: true
        }
      })
      mainWindow.on('close', function(e) {
        const choice = require('electron').dialog.showMessageBoxSync(this,
          {
            type: 'question',
            buttons: ['Da', 'Ne'],
            title: ' Potrdi',
            message: 'Ste prepričani, da želite zapreti aplikacijo?'
          });
        if (choice != 0) {
          e.preventDefault();
        }
      });

      mainWindow.loadURL(
        url.format({
          pathname: path.join(__dirname, `/dist/index.html`),
          protocol: "file:",
          slashes: true
        })
      );
      // Open the DevTools.
      //mainWindow.webContents.openDevTools()

      mainWindow.on('closed', function () {
        mainWindow = null
      })
      menuTemplate = [{label:"Aplikacija",
      submenu: [
        { role: 'quit', label : "Zapri",
        accelerator:'Ctrl+Q'}
      ]
    },
      {
        label: "Okno",
        submenu: [
          {label: "Vhod / Izhod v celozaslonski način", role : 'togglefullscreen'},
          {label: "Minimiziraj", role: 'minimize'},
          {label: "Orodja za razijalce", role : "toggledevtools"}
        ]
      },
      {
        label: "Pomoč", click () {dialog.showMessageBox({
          type:"info",buttons: ["V redu"], title:"Pomoč",
          message: "Za pomoč kontaktirajte razvijalce:",
          detail:"E-mail: ip3586@student.uni-lj.si ali \n\nTel: 070707070"
        })},
        accelerator : "Ctrl+H"
      }
    ]
    const createModal = (htmlFile, parentWindow, width, height) => {
      let modal = new BrowserWindow({
        width: width,
        height: height,
        modal: true,
        parent: parentWindow,
        webPreferences: {
          nodeIntegration: true
        }
      })
    
      modal.loadFile(htmlFile)
    
      return modal;
    
    }
    const menu = Menu.buildFromTemplate(menuTemplate)
    Menu.setApplicationMenu(menu)
    }
    


    app.on('ready', createWindow)

    app.on('window-all-closed', function () {
      if (process.platform !== 'darwin') app.quit()
    })

    app.on('activate', function () {
      if (mainWindow === null) createWindow()
    })