import { ipcRenderer } from 'electron'

export function onCreateWindow(callback: (data: any) => void) {
  ipcRenderer.on('user-data', (event: any, args: any) => {
    callback(args)
  })
}

export function autoSaveWebGLPage(data: any) {
  return ipcRenderer.invoke('auto-save-webgl-page', data)
}

export function onSocketResult(callback: Function) {
  ipcRenderer.on('socket-result', (event: any, args: any) => {
    callback(args)
  })
}

export function onUpdateUser(callback: Function) {
  ipcRenderer.on('update-user-data', (event: any, args: any) => {
    callback(args)
  })
}