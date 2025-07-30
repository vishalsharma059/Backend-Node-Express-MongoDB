function minMaxJump(stones) {
  const n = stones.length;
  let forwardPath = [];
  let returnPath = [];


  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      forwardPath.push(stones[i]);
    } else {
      returnPath.unshift(stones[i]); 
    }
  }

  const path = forwardPath.concat(returnPath);

  let maxJump = 0;
  for (let i = 1; i < path.length; i++) {
    maxJump = Math.max(maxJump, Math.abs(path[i] - path[i - 1]));
  }

  return maxJump;
}

// Input reading
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on("line", (line) => {
  input.push(line.trim());
  if (input.length === 2) {
    const stones = input[1].split(" ").map(Number);
    console.log(minMaxJump(stones));
    rl.close();
  }
});
