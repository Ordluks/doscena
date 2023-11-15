import { getPage } from '../getPage'

test('getPage', async () => {
  const result = await getPage('https://example.com/')
  expect(result).toMatch(/<!doctype html/)
})
