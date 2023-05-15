#!/usr/bin/env node

import { program } from 'commander'
import { readFileSync } from 'fs'
import { exec } from 'node:child_process'
import * as url from 'url';

const packageFile = readFileSync('./package.json', 'utf8')
const {version} = JSON.parse(packageFile)

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

program.version(version)

program.command('run')
  .description('Run g11n lint')
  .action(() => {
    console.log(__dirname)
    const configPath = __dirname+'config/.eslintrc.json'
    console.log('Running g11n lint')
    exec(`yarn eslint -c ${configPath} .`, (error, stdout, stderr) => {
      console.log(stdout)
      console.error(stderr)
    })
  })

program.parse(process.argv)
