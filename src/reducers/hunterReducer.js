export const hunterReducer = (prevState = {}, action) => {
    //    console.log("addHunter-reducer", action, prevState);
    switch (action.type) {
        case 'ADD':
            //console.log(action, state);

            const res = Object.assign(
                { name: "" },
                prevState,
                { names: action.names }

            );
            console.log("reducer res", res);
            return res;

        //            return { names: action.names };
        //return [...state, Object.assign({},action.name)];
        default: return prevState;
    }
};