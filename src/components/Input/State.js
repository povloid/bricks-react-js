import { assign } from 'bricks-fp'

export const inputInitState = () =>
    assign(
        {},
        {
            value: ''
        }
    )

export const inputSetValue = (state, value) => assign({}, state, { value })
export const inputGetValue = ({ value }) => value
