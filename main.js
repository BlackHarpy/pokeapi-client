const electron = require('electron')
const { Menu, Notification, Tray, dialog, ipcMain } = require('electron')
const StoreService = require('./src/services/StoreService')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')
let tray = null
let mainWindow

function setTray() {
  // tray = new Tray('public/assets/60px-Bulbapedia_bulb.png')
  //   const contextMenu = Menu.buildFromTemplate([
  //     {role: 'quit'},
  //   ])
  //   tray.setToolTip('Pokédex')
  //   tray.setContextMenu(contextMenu)
}
function createWindow() {

  mainWindow = new BrowserWindow({show: false})

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.on('closed', function () {
    mainWindow = null
  })

}

async function saveFile(event, content) {
  let response = [];
  try {
    response = await StoreService.saveFile(content);
  } catch(e) {
    console.log('error retrieving favorites')
  } finally {
    event.sender.send('save-favorite-result', response)  
  }
} 

async function getFavorites(event) {
  let list = []
  try {
    list = await StoreService.readFile();
  } catch(e) {
    console.log('error retrieving favorites')
  } finally {
    event.sender.send('load-favorites-result', list);
  }
}

ipcMain.on('save-favorite', saveFile)
ipcMain.on('load-favorites', getFavorites)

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