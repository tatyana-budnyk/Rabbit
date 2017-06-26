export const hunterReducer = (state = [], action) => {

    switch (action.type) {
        case 'ADD':
            return [...state, action.hunter];
        case 'DEL':
            const res = state.filter((elem) => elem !== action.hunter);
            return res;
        default: return state;
    }
};