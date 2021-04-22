const { app, BrowserWindow } = require("electron");
const path = require("path");

app.on("ready", () => {
  const iconPath = path.join(__dirname, "public/favicon.png");
  const mainWindow = new BrowserWindow({
    icon: iconPath,
    width: 1280,
    height: 960
  });
  mainWindow.loadFile(path.join(__dirname, "public/index.html"));
  mainWindow.setMenuBarVisibility(false);
  //mainWindow.webContents.openDevTools();
});
