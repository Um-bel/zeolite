const { app, BrowserWindow, Menu } = require('electron'); 
const path = require('path'); 
const iconPath = path.join(__dirname, '../zeolite.png')

function createWindow() {
    const win = new BrowserWindow({
        width: 1300, 
        height: 800, 
        icon: iconPath, 
        title: 'Zeolite', 
        webPreferences: {
            preload: path.join(__dirname, 'testPreload.js')
        }
    })

    win.loadFile('test.html'); 
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if(BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
Menu.setApplicationMenu(null)
})

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') {
        app.quit(); 
    }
})