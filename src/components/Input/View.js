const { PathStoreComponent } = require('../../index')
const { inputGetValue, inputSetValue } = require('./State')

class Input extends PathStoreComponent {
    render({ placeholder }) {
        const state = this.getLocalState()
        const value = inputGetValue(state)
        const onChange = (e) => {
            this.updateLocalState(inputSetValue, e.target.value)
        }
        return (
            <input
                className={`input`}
                // keep in mind that onInput in Preact === onChange in React,
                // and onChange in Preact === onBlur on React
                onInput={onChange}
                value={value}
                placeholder={placeholder}
            />
        )
    }
}

module.exports = Input
