const { assign } = require('bricks-fp')

const inputInitState = () =>
    assign(
        {},
        {
            value: ''
        }
    )

const inputSetValue = (state, value) => assign({}, state, { value })
const inputGetValue = ({ value }) => value

module.exports = {
    inputInitState,
    inputSetValue,
    inputGetValue
}
