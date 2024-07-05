import { INIT_CODE_HASH } from './constants'

// import { bytecode } from '@uniswap/v2-core/build/UniswapV2Pair.json'
// import { keccak256 } from '@ethersproject/solidity'

// this _could_ go in constants, except that it would cost every consumer of the sdk the CPU to compute the hash
// and load the JSON.
// const COMPUTED_INIT_CODE_HASH = keccak256(['bytes'], [`0x${bytecode}`])

describe('constants', () => {
  describe('INIT_CODE_HASH', () => {
    it('matches computed bytecode hash', () => {
      expect('0x8615843ab28b4b86b2382dca22cf14f0a6ba9e52cb006531eb574042a5b54a46').toEqual(INIT_CODE_HASH)
    })
  })
})
