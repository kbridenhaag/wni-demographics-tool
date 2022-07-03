#!/usr/bin/env npx ts-node

import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { parseWniData } from './wni-data'

const main = (args: string[]) => {
  return yargs.scriptName('wni-demographics-cli')
    .usage('$0 <cmd> [args]')
    .command('wni [file]', 'validates and parses WNI demographic data source file in CSV and outputs to JSON', (yargs) => {
      yargs.positional('file', {
        type: 'string',
        describe: 'the file to parse'
      }).option('d', {
        alias: 'dest',
        describe: 'output file name or prefix',
        type: 'string'
      })
    }, async (argv) => {
      await parseWniData(argv.file as string, argv.dest as string).catch((err) => console.log(err))
    })
    .help()
    .argv
}

main(hideBin(process.argv))
