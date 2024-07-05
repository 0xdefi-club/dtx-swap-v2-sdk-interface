import { Ether, Token, WETH9, CurrencyAmount } from '@uniswap/sdk-core'
import { Pair, Route } from './index'

describe('Route', () => {
  const ETHER = Ether.onChain(1)
  const token0 = new Token(1, '0x227e77752F41CeBA354003d84F1a568De88a5868', 18, 'DAIc')
  const token1 = new Token(1, '0x120aBe28DD008FAdA455b1CA70E27582D32fa92D', 18, 'USDc')
  const weth = WETH9[1]
  const pair_0_1 = new Pair(CurrencyAmount.fromRawAmount(token0, '100'), CurrencyAmount.fromRawAmount(token1, '200'))
  const pair_0_weth = new Pair(CurrencyAmount.fromRawAmount(token0, '100'), CurrencyAmount.fromRawAmount(weth, '100'))
  const pair_1_weth = new Pair(CurrencyAmount.fromRawAmount(token1, '175'), CurrencyAmount.fromRawAmount(weth, '100'))

  it('constructs a path from the tokens', () => {
    const route = new Route([pair_0_1], token0, token1)
    expect(route.pairs).toEqual([pair_0_1])
    expect(route.path).toEqual([token0, token1])
    expect(route.input).toEqual(token0)
    expect(route.output).toEqual(token1)
    expect(route.chainId).toEqual(1)
  })

  it('can have a token as both input and output', () => {
    const route = new Route([pair_0_weth, pair_0_1, pair_1_weth], weth, weth)
    expect(route.pairs).toEqual([pair_0_weth, pair_0_1, pair_1_weth])
    expect(route.input).toEqual(weth)
    expect(route.output).toEqual(weth)
  })

  it('supports ether input', () => {
    const route = new Route([pair_0_weth], ETHER, token0)
    expect(route.pairs).toEqual([pair_0_weth])
    expect(route.input).toEqual(ETHER)
    expect(route.output).toEqual(token0)
  })

  it('supports ether output', () => {
    const route = new Route([pair_0_weth], token0, ETHER)
    expect(route.pairs).toEqual([pair_0_weth])
    expect(route.input).toEqual(token0)
    expect(route.output).toEqual(ETHER)
  })
})
