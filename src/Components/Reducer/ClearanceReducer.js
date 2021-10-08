
const initialState = {
    amount: 0
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'CLEARANCE': {
            initialState.amount = action.data
            return initialState
        }
        default: {
            return state
        }
    }
}