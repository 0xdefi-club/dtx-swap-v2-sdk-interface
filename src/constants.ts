import JSBI from 'jsbi'

// export const FACTORY_ADDRESS = '0x61b781d983f5D2134946dF130E9B62962C71b2C0' // base sepolia
export const FACTORY_ADDRESS = '0x2EA9051d5a48eA2350b26306f2b959D262cf67e1' // taiko
export const FACTORY_ADDRESS_MAP = {
  [84532]: '0x61b781d983f5D2134946dF130E9B62962C71b2C0',
  [167000]: '0x2EA9051d5a48eA2350b26306f2b959D262cf67e1'
}

export const INIT_CODE_HASH = '0x8615843ab28b4b86b2382dca22cf14f0a6ba9e52cb006531eb574042a5b54a46'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const FIVE = JSBI.BigInt(5)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)
