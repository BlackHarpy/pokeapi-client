const electron = require('electron')
const { Menu, Notification, Tray, dialog, ipcMain } = require('electron')
const StoreService = require('./src/services/StoreService')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')
let tray = null
let mainWindow

const { default: installExtension, REDUX_DEVTOOLS } = require('electron-devtools-installer');

function installDevExtensions() {
  installExtension(REDUX_DEVTOOLS)
    .then((name) => console.log(`Added Extension:  ${name}`))
    .catch((err) => console.log('An error occurred: ', err));
}

function testNotification() {
  const template = [{
    label: 'File',
    submenu: [{
      label: 'Test',
      click: eventHandler
    },
    { role: 'quit' }
    ]
  }, {
    label: 'Edit',
    submenu: [
      { role: 'undo' },
      { role: 'redo' },
      { type: 'separator' },
      { role: 'cut' },
      { role: 'copy' },
      { role: 'paste' },
      { role: 'pasteandmatchstyle' },
      { role: 'delete' },
      { role: 'selectall' }
    ]
  }]

  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)

}

async function getFavorites() {
  const content = await StoreService.readFile();
  console.log(content);
}

function setTray() {
  // tray = new Tray('public/assets/60px-Bulbapedia_bulb.png')
  //   const contextMenu = Menu.buildFromTemplate([
  //     {role: 'quit'},
  //   ])
  //   tray.setToolTip('Pokédex')
  //   tray.setContextMenu(contextMenu)
}
function createWindow() {

  installDevExtensions();
  mainWindow = new BrowserWindow({show: false})

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
    getFavorites();
  })

  mainWindow.on('closed', function () {
    mainWindow = null
  })

}

async function saveFile(event, content) {
  const response = await StoreService.saveFile(content);
  event.sender.send('save-favorite-result', response)  
} 

ipcMain.on('save-favorite', saveFile)


app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})