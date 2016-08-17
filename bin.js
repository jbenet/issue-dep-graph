#!/usr/bin/env node

var argv = require('minimist')(process.argv.slice(2))
var log = console.log
var depGraph = require('./index')

function die(error) {
  process.stderr.write('error: ' + error + '\n')
  process.exit(1)
}

function usage(code) {
  var bin = process.argv[1]
  process.stdout.write('issue-dep-dot - retrieve a dot graph for issue dependencies\n')
  process.stdout.write('usage:  issue-dep-dot [--auth <user>,<token>] <github-url>\n')
  process.stdout.write('\noptions:\n')
  process.stdout.write('    --auth  <username>,<token>\n')
  process.stdout.write('\nexample:\n')
  process.stdout.write('    issue-dep-dot https://github.com/noffle/github-dependency-crawl\n')
  process.exit(code)
}

function cleanInput(input) {
  // for now only github. remove the prefix.
  return input.replace(/^(https?:)?(\/\/)?github\.com\//, '')
}

function getInput(argv) {
  var input = argv._[0]
  if (!input) {
    return usage()
  }

  return cleanInput(input)
}

function parseAuth(s) {
  if (!s) return undefined
  var p = s.split(',')
  if (p.length != 2) {
    return die('invalid auth string: '+ s +'\nMust be: <username>,<token>')
  }

  return {
    client_id: p[0],
    client_secret: p[1],
  }
}

function main() {
  var input = getInput(argv)
  var auth = parseAuth(argv.auth)

  var opts = { repo: input }
  if (auth) opts.auth = auth

  depGraph(opts, function(err, graph) {
    if (err) die(err)

    log(graph)
  })
}

main()
