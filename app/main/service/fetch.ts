import request from 'request'
import qs from 'querystring'

const baseUrl = 'http://localhost:8000'

export const fetch = {
  get(url: string, data: any) {
    return fetch.handle('GET', url, data)
  },
  post(url: string, data: any) {
    return fetch.handle('POST', url, data)
  },
  handle(method: 'GET' | 'POST', url: string, data: any) {
    return new Promise((resolve, reject) => {
      const params = {
        method,
        baseUrl,
        url,
        ...(method === 'GET' ? { qs: data } : { form: data })
      }
      request(params, (err: any, res: any, body: any) => {
        try {
          if (err) {
            reject(err)
            return
          }
          resolve(JSON.parse(res.body))
        } catch (e) {
          reject(e)
        }
      })
    })
  }
}