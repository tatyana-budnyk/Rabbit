export const moveRabbit = (coordinates) => {
    return {
        type: "MOVE",
        coordinates: {
            x: Math.floor(Math.random() * 800),
            y: Math.floor(Math.random() * 500)
        }
    };
};