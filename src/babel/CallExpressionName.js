function callExpressionName(path) {
    return path.node.callee.name
}


module.exports = callExpressionName