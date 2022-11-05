const { app, BrowserWindow,ipcMain } = require('electron');
const path = require('path');


if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {

  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration:true
    },
  });


  mainWindow.loadFile(path.join(__dirname, 'index.html'));

};


app.on('ready', createWindow);


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {

  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
ipcMain.on("maintorender",(event,args)=>{

console.log(args);


})

