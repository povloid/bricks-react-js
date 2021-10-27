import { PathStoreComponent } from './PathStoreComponent'

export class PathStoreConsumer extends PathStoreComponent {
    render({ children }) {
        return children(this.store.getStateIn(this.path))
    }
}
