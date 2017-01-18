
exports.fetch = function(load) {
    return fetch(load.address)
        .then(r => r.arrayBuffer())
        .then(b => (load.metadata.buffer = b) && '')
}

exports.instantiate = function(load) {
    return load.metadata.buffer
}
