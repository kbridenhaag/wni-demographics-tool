#!/usr/bin/env npx ts-node

import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

const main = (args: string[]) => {
  return yargs.scriptName('wni-demographics-cli')
    .usage('$0 <cmd> [args]')
    .command('initial [file]', 'validate initial CSV', (yargs) => {
      yargs.positional('file', {
        type: 'string',
        describe: 'the file to parse'
      }).option('d', {
        alias: 'dest',
        describe: 'output file name or prefix',
        type: 'string'
      })
    }, async (argv) => {
      // TODO
    })
    .help()
    .argv
}

main(hideBin(process.argv))
