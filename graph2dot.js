module.exports = g2d

// graph2dot turns a directed graph as an input and returns
// a dot digraph.
//
// The input of the graph is:
//    { "node": ["dependency", "dependency", ...] }
//
function g2d(graph) {

  // TODO: make this streaming...
  var nodes = graphNodes(graph)
  var edges = graphEdges(graph)


  var out = 'digraph deps {\n';

  for (var n in nodes) {
    out += dotForNode(nodes[n])
  }
  out += '\n'
  for (var e in edges) {
    out += dotForEdge(edges[e])
  }

  out += '}'
  return out
}


function dotSafe(s) {
  return s.replace(/[^A-Za-z0-9]/g, '_')
}

function dotForNode(node) {
  return '    '+ dotSafe(node) + ' [label="' + node + '"];\n'
}

function dotForEdge(edge) {
  return '    '+ dotSafe(edge[0]) + ' -> ' + dotSafe(edge[1]) + ';\n'
}

function graphNodes(graph) {
  var nodes = []
  var seen = {}

  var uniqAdd = function(elem) {
    if (seen[elem]) return

    nodes.push(elem)
    seen[elem] = true
  }

  for (var n in graph) {
    uniqAdd(n)

    for (var n2 in graph[n]) {
      uniqAdd(graph[n][n2]) // make sure deps are there.
    }
  }

  return nodes
}


function graphEdges(graph) {
  var edges = []

  for (var n1 in graph) {
    for (var n2 in graph[n1]) {
      edges.push([graph[n1][n2], n1])
    }
  }

  return edges
}
