export class IpcService {
  
  static sendSaveMessage(content) {
    return new Promise ((resolve, reject) => {

      const {ipcRenderer} = window.require('electron');
      ipcRenderer.once('save-favorite-result', (event, arg) => {
        console.log(arg);
        resolve('saved');
      })
      ipcRenderer.send('save-favorite', content)
    })  
  }
}