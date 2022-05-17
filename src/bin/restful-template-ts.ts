#!/usr/bin/env node

import pkg from '../../package.json';
import commander from 'commander';

const program = new commander.Command();

program.version(pkg.version).command('schema [number]', 'tables (routes) in your schema')
.parse(process.argv);