import { request } from 'http'

export const getPage = (url: string) =>
  new Promise<string>((resolve, reject) => {
    const req = request('http://example.com', (res) => {
      const data: any[] = []

      res.on('data', (chunk) => data.push(chunk))
      res.on('error', (error) => {
        reject(`Unable to take page: ${url}`)
      })
      res.on('end', () => {
        resolve(data.join())
      })
    })

    req.end()
  })
