export const rabbitReducer = (state, action) => {
    switch (action.type) {
        case 'MOVE':
            return Object.assign({}, state,
                {
                    x: Math.floor(Math.random() * 1000),
                    y: Math.floor(Math.random() * 500)
                }
            );
        default: return state ? state : {};
    }
};