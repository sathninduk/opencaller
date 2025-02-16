import { app, BrowserWindow, session } from "electron";
import path from "path";

let mainWindow: BrowserWindow | null;

app.whenReady().then(() => {
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 800,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
        },
    });

    // Disable CORS
    session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
        callback({
            responseHeaders: {
                ...details.responseHeaders,
                "Access-Control-Allow-Origin": ["*"],
                "Access-Control-Allow-Methods": ["GET, POST, PUT, DELETE, OPTIONS"],
                "Access-Control-Allow-Headers": ["*"],
            },
        });
    });

    mainWindow.loadURL("http://localhost:5173");
});

