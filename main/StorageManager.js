const fs = require('fs');
import { ipcMain } from 'electron';

export default class StorageManager{
    constructor(){
      this.path = '.';
    }
  
    score(data){
      fs.appendFile('score.json', data);
    }
  
}