export const hunterReducer = (state = [], action) => {

    switch (action.type) {
        case 'ADD':
                return [...state, Object.assign({}, action.hunter)];

        case 'DEL':
            const newState = state.filter((obj) => {
                return obj.hunterName != action.hunter.hunterName;
            });
            return newState;
            
        default: return state;
    }
};