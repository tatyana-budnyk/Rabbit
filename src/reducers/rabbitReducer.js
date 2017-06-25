export const rabbitReducer = (state, action) => {
    switch (action.type) {
        case 'MOVE':
            return Object.assign({}, state, action.coordinates);
        default: return state ? state : {};
    }
};