import {BrowserWindow,app} from 'electron';

console.log('launch called');

app.on('ready', async ()=>{
//   let win = new BrowserWindow({width: 800, height: 600})

  console.log(process.env);
//   win.loadFile(htmlFile);
//   win.webContents.openDevTools();
//   win.on('closed', () => win = null);
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', async () => {
  console.log('app activated');
})