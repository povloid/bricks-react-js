import { Component } from 'react'

export class PathStoreComponent extends Component {
    constructor(props) {
        super(props)

        const { store, path } = props

        if (!path) {
            throw new Error('path prop is not defined!')
        }

        if (!store) {
            throw new Error('store prop is not defined!')
        }

        this.store = store
        this.path = path

        this.listenerId = this.store.addChangeStateListener(({ path }) => {
            let update = false
            for (let i = 0; i < this.path.length; i++) {
                update = this.path[i] === path[i]
            }
            if (update) {
                this.forceUpdate()
            }
        })
    }

    getLocalState() {
        return this.store.getStateIn(this.path)
    }

    updateLocalState(fun, ...args) {
        return this.store.updateStateIn(this.path, fun, ...args)
    }

    componentWillUnmount() {
        this.store.removeChangeStateListener(this.listenerId)
    }

    // shouldComponentUpdate(_nextProps, nextState) {
    //     return !Object.is(this.state, nextState)
    // }
}
