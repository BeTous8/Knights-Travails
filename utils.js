// helper functions
export function getValidMoves(position) {
    const x = position[0];
    const y = position[1];
    // Our knight moves function
    const Moves = [
        [x + 2, y + 1], [x + 2, y - 1],
        [x + 1, y + 2], [x + 1, y - 2],
        [x - 2, y + 1], [x - 2, y - 1],
        [x - 1, y + 2], [x - 1, y - 2],
    ];

    return  Moves.filter(([newX, newY]) => {
        return newX >= 0 && newX <= 7 && newY >= 0 && newY <= 7;
    })

    
};

export function arraysEqual(currentArr, targetArr) {
    return currentArr[0] === targetArr[0] && currentArr[1] === targetArr[1];
}




