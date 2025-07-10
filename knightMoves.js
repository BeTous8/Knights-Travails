import { getValidMoves, arraysEqual } from "./utils.js";

// main algorithm
export function knightMoves(start, end) {
    console.log("Starting search from", start, "to", end);
    const queue = [start];
    const visited = new Set();
    const parent = {};
    const path = [];
    let move = 0;


    while (queue.length > 0) {
        const currentPosition = queue.shift();
        console.log("Processing position:", currentPosition);
        move += 1;

        if (arraysEqual(currentPosition, end)) {
            console.log("Found target!");
            // reconstruct the path and return/ going backward in the chain
            const reconstruction = (currentPositionStr) => {
                console.log("Reconstructing from:", currentPositionStr);
                console.log("Start position string:", `${start[0]},${start[1]}`);
                console.log("Are they equal?", currentPositionStr === `${start[0]},${start[1]}`);
                console.log("Parent of current position:", parent[currentPositionStr]);


                if (currentPositionStr === `${start[0]},${start[1]}`) {
                    path.push(currentPositionStr);
                    console.log('the path is now complete..');
                    console.log(`the target is found in ${move} moves`);
                    return;
                } 

                path.push(currentPositionStr);
                return reconstruction(parent[currentPositionStr])
            };

            const endStr = `${end[0]},${end[1]}`;
            console.log("END STRING:", endStr);
            reconstruction(endStr);

            const pathArr = path.map(positionStr => {
                const [x, y] = positionStr.split(',');
                return [parseInt(x), parseInt(y)];
            }).reverse();

            return pathArr;
        }

        console.log("Target not found yet, exploring moves...");
        const validMoves = getValidMoves(currentPosition);
        console.log("Valid moves from", currentPosition, ":", validMoves);
        
        validMoves.forEach(move => {
            const arrToStrMove = `${move[0]},${move[1]}`;

            if (!visited.has(arrToStrMove)) {
                visited.add(arrToStrMove);
                queue.push(move);
                parent[arrToStrMove] = `${currentPosition[0]},${currentPosition[1]}`;
            }
        })
    }

    return 'no path found'
}
