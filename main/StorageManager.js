const fs = require('fs');
import { ipcMain } from 'electron';

export default class StorageManager{
    constructor(){
      this.path = '.';
    }
  
    score(data){
      return fs.appendFile('score.json', JSON.stringify(data) + '\n');
    }
  
}