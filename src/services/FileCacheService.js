const electron = require('electron');
const path = require('path');
const fs = require('fs');

class FileCacheService {
  static updateCache(url, data) {


    return new Promise((resolve, reject) => {
        const userDataPath = (electron.app || electron.remote.app).getPath('userData');
        const filePath = path.join(userDataPath, 'cache.json');

        fs.readFile(filePath, function (err, contents) {
          let list = {}
          if (!err) {
            list = JSON.parse(contents);
          }
          if (!list[url]) {
            list[url] = data;
            const stringContent = JSON.stringify(list);
            fs.writeFile(filePath, stringContent, function (err) {
              err ? reject(err) : resolve('cache updated!')
            });
          } else {
            resolve('cache record already exists')
          }
        });
  

    });
  };

  static loadFromCache(url) {
    return new Promise((resolve, reject) => {
      const userDataPath = (electron.app || electron.remote.app).getPath('userData');
      const filePath = path.join(userDataPath, 'cache.json');
      fs.readFile(filePath, function (err, contents) {
        if (err) {
          reject(err)
        } else {
          const list = JSON.parse(contents);
          list[url] ? resolve(list[url]) : reject('No data in Cache');
        }
      });
    })
  }
}
// expose the class
module.exports = FileCacheService;