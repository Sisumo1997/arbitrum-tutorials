require('@nomiclabs/hardhat-ethers')
const main = require('./scripts/exec.js')
const { hardhatConfig } = require('arb-shared-dependencies')

const { task } = require('hardhat/config')


task('redeem-failed-retryable')
  .addParam('txhash', 'Hash of L1 txn that created the retryable ticket')

  .setAction(async args => {
    await main(args.txhash)
  })

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = hardhatConfig
