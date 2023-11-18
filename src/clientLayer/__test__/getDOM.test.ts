import { getDOM } from '../getDOM'

test('getDOM', async () => {
  const result = await getDOM('https://example.com/')
  expect(result.title).toEqual('Example Domain')
})
