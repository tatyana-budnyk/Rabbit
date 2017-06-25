let allNames = [];

export const actionAddHunter = (name) => {
    if (!allNames.includes(name)) {
        allNames.push(name);
    }
    return {
        type: "ADD",
        names: allNames
    };
};