const electron = require('electron');
const { Menu, Notification, Tray, ipcMain } = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');

const StoreService = require('./src/services/StoreService');
const FileCacheService = require('./src/services/FileCacheService');

let tray = null;
let mainWindow;

function showNotification(text) {
  const message = new Notification({
    title: "Action status",
    body: text
  });
  message.show();
}

function createWindow() {
  mainWindow = new BrowserWindow({show: false});

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  });

  mainWindow.on('closed', function () {
    mainWindow = null
  })

}

async function saveFile(event, content) {
  let response = [];
  try {
    response = await StoreService.saveFile(content);
  } catch(e) {
    response = [];
    showNotification('error saving favorites');
    console.log('error saving favorites')
  } finally {
    showNotification('Favorites updated!');
    event.sender.send('save-favorite-result', response)  
  }
} 

async function getFavorites(event) {
  let list = []
  try {
    list = await StoreService.readFile();
  } catch(e) {
    list = []
    console.log('error retrieving favorites')
  } finally {
    event.sender.send('load-favorites-result', list);
  }
}

async function updateCache(event, content) {
  let response = [];
  try {
    response = await FileCacheService.updateCache(content.url, content.data);
  } catch(e) {
    response = [];
    console.log('error saving cache')
  } finally {
    event.sender.send('save-cache-result', 'cache updated!')  
  }
}

async function loadFromCache(event, url) {
  let response = null;
  try {
    response = await FileCacheService.loadFromCache(url);
  } catch(e) {
    response = null;
    console.log('error loading from cache')
  } finally {
    event.sender.send('load-cache-result', response)  
  }
}

ipcMain.on('save-favorite', saveFile)
ipcMain.on('load-favorites', getFavorites)
ipcMain.on('update-cache', updateCache)
ipcMain.on('load-cache', loadFromCache)

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