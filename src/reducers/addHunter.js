export const addHunter = (state = {}, action) => {
    console.log(state);
    switch (action.type) {
        case 'ADD':
            //console.log(action, state);
            //const res = Object.assign({}, state, { name: action.name });
            //console.log("reducer:", res);
            return Object.assign({}, state, { name: action.name });
        default: return state ? state : {};
    }
};