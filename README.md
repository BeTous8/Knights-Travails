# Knights Travails

A JavaScript solution that finds the shortest path for a knight to move between any two squares on an 8×8 chessboard.

## How It Works

Uses **Breadth-First Search (BFS)** to guarantee the shortest possible path. BFS explores positions layer by layer, so the first time it reaches the target is guaranteed to be optimal.

## Setup

```bash
npm install
npm start
```

## Usage

```javascript
import { knightMoves } from './knightMoves.js';

knightMoves([0,0], [1,2]);  // [[0,0], [1,2]]
knightMoves([0,0], [3,3]);  // [[0,0], [2,1], [3,3]]
knightMoves([3,3], [4,3]);  // [[3,3], [4,5], [2,4], [4,3]]
```

## Example Output

```bash
> knightMoves([3,3], [4,3])
=> You made it in 3 moves! Here's your path:
  [3,3]
  [4,5]
  [2,4]
  [4,3]
```

## Files

- `knightMoves.js` - Main BFS algorithm
- `utils.js` - Helper functions for move validation
- `test.js` - Test cases