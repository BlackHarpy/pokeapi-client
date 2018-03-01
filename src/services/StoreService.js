const electron = require('electron');
const path = require('path');
const fs = require('fs');

class Store {
  static saveFile(content) {
    return new Promise((resolve, reject) => {
      const userDataPath = (electron.app || electron.remote.app).getPath('userData');
      const filePath = path.join(userDataPath, 'favorites.json');
      const stringContent = JSON.stringify(content)

      fs.writeFile(filePath, stringContent, function (err) {
        err ? reject(err) :  resolve('done!')
      });

    })
  }

  static readFile() {
    return new Promise((resolve, reject) => {
      const userDataPath = (electron.app || electron.remote.app).getPath('userData');
      const filePath = path.join(userDataPath, 'favorites.json');
      fs.readFile(filePath, function (err, contents) {
        err ?  reject(err) : resolve(JSON.parse(contents));
      });
    })
  }
}
// expose the class
module.exports = Store;