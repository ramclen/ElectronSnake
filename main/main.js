const { ipcMain } = require('electron');
import StorageManager from './StorageManager';
import events from '../core/Events';

const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

function createWindow () {
  // Create the browser window.
  const win = new BrowserWindow({width: 630, height: 800})

  // and load the index.html of the app.
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  new SystemEventHandler(new StorageManager()).listen();
} 

app.on('ready', createWindow) 






class SystemEventHandler{
  constructor(storageManager){
    this.storageManager = storageManager;
  }

  listen(){
    ipcMain.on(events.system.storage, function(e, message) {
      console.log('new Message ' + message)
      this.storageManager[message.method](message.data)
    }.bind(this));
  }
}