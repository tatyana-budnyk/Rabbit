export const hunterReducer = (state = [], action) => {

    switch (action.type) {
        case 'ADD':
            const existingItem = state.filter((obj) => {
                return obj.hunterName === action.hunter.hunterName;
            });
            if (existingItem.length === 0) {
                return [...state, Object.assign({}, action.hunter)];
            }
            break;

        case 'DEL':
            console.log("delete***", action);

            const newState = state.filter((obj) => {
                return obj.hunterName != action.hunter.hunterName;
            });

            const itemNumber = state.indexOf(action.hunter);
            return newState;
        default: return state;
    }
};