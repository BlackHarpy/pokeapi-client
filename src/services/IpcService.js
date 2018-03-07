export class IpcService {
  
  static sendSaveMessage(content) {
    return new Promise ((resolve, reject) => {
      const {ipcRenderer} = window.require('electron');
      ipcRenderer.once('save-favorite-result', (event, arg) => {
        resolve('saved');
      })
      ipcRenderer.send('save-favorite', content)
    })  
  }

  static sendLoadMessage() {
    return new Promise ((resolve, reject) => {
      const {ipcRenderer} = window.require('electron');
      ipcRenderer.once('load-favorites-result', (event, arg) => {
        resolve(arg);
      })
      ipcRenderer.send('load-favorites')
    })
  }
  static sendUpdateCacheMessage(content) {
    return new Promise ((resolve, reject) => {
      const {ipcRenderer} = window.require('electron');
      ipcRenderer.once('update-cache-result', (event, arg) => {
        console.log(arg);
        resolve('saved');
      })
      ipcRenderer.send('update-cache', content)
    })  
  }

  static sendLoadFromCacheMessage(url) {
    return new Promise ((resolve, reject) => {
      const {ipcRenderer} = window.require('electron');
      ipcRenderer.once('load-cache-result', (event, cachedData) => {
        resolve(cachedData);
      })
      ipcRenderer.send('load-cache', url)
    })
  }
}