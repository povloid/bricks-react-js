const PathStoreComponent = require('./PathStoreComponent')

class PathStoreConsumer extends PathStoreComponent {
    render({ children }) {
        return children(this.store.getStateIn(this.path))
    }
}

module.exports = PathStoreConsumer
