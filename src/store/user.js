const initialState = {
    fullName: 'John Doe',
    loggedIn: false,
}

export function userReducer(state = initialState, action) {
    return state
}

// Selectors

export const getName = state => {
    return state.user.fullName.split(' ')[0].toLowerCase();
}
