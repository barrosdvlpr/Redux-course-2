import { createStore } from "redux"

const initialState = {
    amount: "9.99",
    currencyCode: 'EUR',
}

function reducer(state = initialState, action) {
    return state
}

export const store = createStore(reducer)