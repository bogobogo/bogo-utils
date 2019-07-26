function CallExpressionName(path) {
    return path.node.callee.name
}

module.exports = CallExpressionName