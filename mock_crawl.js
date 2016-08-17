var data = {
  'noffle/github-dependency-crawl/11': [],
  'noffle/github-dependency-crawl/10': [],
  'noffle/github-dependency-crawl/9': [],
  'noffle/github-dependency-crawl/8': [],
  'noffle/github-dependency-crawl/7':
   [ 'noffle/github-dependency-crawl/4',
     'noffle/github-dependency-crawl/5',
     'noffle/github-dependency-crawl/6' ],
  'noffle/github-dependency-crawl/6': [],
  'noffle/github-dependency-crawl/5': [],
  'noffle/github-dependency-crawl/4': [],
  'noffle/github-dependency-crawl/3': [ 'noffle/ipget/18' ],
  'noffle/github-dependency-crawl/2': [ 'noffle/github-dependency-crawl/3' ],
  'noffle/github-dependency-crawl/1':
   [ 'noffle/github-dependency-crawl/2',
     'noffle/github-dependency-crawl/3' ],
  'noffle/ipget/18':
   [ 'ipfs/ipget/24',
     'ipfs/ipget/26',
     'ipfs/ipget/20',
     'ipfs/ipget/21' ],
  'ipfs/ipget/24': [],
  'ipfs/ipget/26': [],
  'ipfs/ipget/20': [],
  'ipfs/ipget/21': []
}

module.exports = function(opts, cb) {
  cb(null, data)
}
