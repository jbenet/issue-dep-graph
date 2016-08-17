
var crawl = require('github-dependency-crawl')
// var crawl = require('./mock_crawl')
var g2d = require('./graph2dot')

module.exports = function(opts, cb) {
  crawl(opts, function(err, graph) {
    cb(err, g2d(graph))
  })
}
