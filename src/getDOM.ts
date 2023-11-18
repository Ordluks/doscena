import { request } from 'http'
import { JSDOM } from 'jsdom'

export const getDOM = (url: string) =>
  new Promise<Document>((resolve, reject) => {
    const req = request('http://example.com', (res) => {
      const data: any[] = []

      res.on('data', (chunk) => data.push(chunk))
      res.on('error', (error) => {
        reject(`Unable to take page: ${url}`)
      })
      res.on('end', () => {
        resolve(new JSDOM(data.join()).window.document)
      })
    })

    req.end()
  })
