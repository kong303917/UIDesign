import fs from 'fs'
import zlib from 'zlib'
import { Stream } from 'stream'

export function saveBase64ToImage(filename: string, data: string) {
  return new Promise((resolve, reject) => {
    const b = data.replace(/^data:image\/\w+;base64,/, '');
    const dataBuffer = new Buffer(b, 'base64');
    fs.writeFile(filename, dataBuffer, (err: any) => {
      if (err) {
        reject(err)
        return
      }
      resolve(filename)
    })
  })
}

export function saveCodeFile(filename: string, code: string) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filename, code, (err: any) => {
      if (err) {
        reject(err)
        return
      }
      resolve(filename)
    })
  })
}

export function readFile(filename: string) {

}

export function mkdir(dirname: string) {
  return new Promise((resolve, reject) => {
    fs.mkdir(dirname, (err: any) => {
      if (err) {
        reject(err)
        return
      }
      resolve()
    })
  })
}