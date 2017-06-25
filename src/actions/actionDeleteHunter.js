export const actionDeleteHunter = (hunter) => {
    console.log(hunter);
    return {
        type: "DEL",
        hunter
    };
};