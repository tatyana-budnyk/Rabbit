export const hunterReducer = (state = [], action) => {

    switch (action.type) {
        case 'ADD':
            return [...state, action.hunter];
        case 'DEL':
            return state.filter((elem) => elem !== action.hunter);
        default: return state;
    }
};