
const initialState = {
    amount: 0
}

export default function(state = initialState, action) {
    switch (action.type) {
        case 'TAX': {
            initialState.amount = action.data
            return {...initialState}
        }
        default: {
            return state
        }
    }
}