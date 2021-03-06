// var minPathSum = function (grid) {
//   let m = grid[0].length;
//   let n = grid.length;
//   let minSum = Math.max(...grid.map((x) => Math.max(...x))) * m * n;
//   let count = 0;

//   const traverseRectangle = (x, y, currentSum) => {
//     currentSum += grid[y][x];
//     count++;
//     if (x === m - 1 && y === n - 1) {
//       if (currentSum < minSum) minSum = currentSum;
//     } else {
//       if (x < m - 1) traverseRectangle(x + 1, y, currentSum);
//       if (y < n - 1) traverseRectangle(x, y + 1, currentSum);
//     }
//   };
//   traverseRectangle(0, 0, 0);
//   return [minSum, count];
// };

var minPathSum = function (grid) {
  let n = grid.length;
  let m = grid[0].length;

  for (let i = n - 1; i >= 0; i--)
    for (let j = m - 1; j >= 0; j--) {
      if (i + 1 < n && j + 1 < m) {
        grid[i][j] += Math.min(grid[i + 1][j], grid[i][j + 1]);
      } else if (i + 1 < n) {
        grid[i][j] += grid[i + 1][j];
      } else if (j + 1 < m) {
        grid[i][j] += grid[i][j + 1];
      }
    }
  return grid[0][0];
};

console.log(minPathSum([[1]]));
console.log(minPathSum([[1, 2]]));
console.log(minPathSum([[1], [2]]));
console.log(
  minPathSum([
    [1, 2],
    [3, 4],
  ])
);
console.log(
  minPathSum([
    [3, 8, 6, 0, 5, 9, 9, 6, 3, 4, 0, 5, 7, 3, 9, 3],
    [0, 9, 2, 5, 5, 4, 9, 1, 4, 6, 9, 5, 6, 7, 3, 2],
    [8, 2, 2, 3, 3, 3, 1, 6, 9, 1, 1, 6, 6, 2, 1, 9],
    [1, 3, 6, 9, 9, 5, 0, 3, 4, 9, 1, 0, 9, 6, 2, 7],
    [8, 6, 2, 2, 1, 3, 0, 0, 7, 2, 7, 5, 4, 8, 4, 8],
    [4, 1, 9, 5, 8, 9, 9, 2, 0, 2, 5, 1, 8, 7, 0, 9],
    [6, 2, 1, 7, 8, 1, 8, 5, 5, 7, 0, 2, 5, 7, 2, 1],
    [8, 1, 7, 6, 2, 8, 1, 2, 2, 6, 4, 0, 5, 4, 1, 3],
    [9, 2, 1, 7, 6, 1, 4, 3, 8, 6, 5, 5, 3, 9, 7, 3],
    [0, 6, 0, 2, 4, 3, 7, 6, 1, 3, 8, 6, 9, 0, 0, 8],
    [4, 3, 7, 2, 4, 3, 6, 4, 0, 3, 9, 5, 3, 6, 9, 3],
    [2, 1, 8, 8, 4, 5, 6, 5, 8, 7, 3, 7, 7, 5, 8, 3],
    [0, 7, 6, 6, 1, 2, 0, 3, 5, 0, 8, 0, 8, 7, 4, 3],
    [0, 4, 3, 4, 9, 0, 1, 9, 7, 7, 8, 6, 4, 6, 9, 5],
    [6, 5, 1, 9, 9, 2, 2, 7, 4, 2, 7, 2, 2, 3, 7, 2],
    [7, 1, 9, 6, 1, 2, 7, 0, 9, 6, 6, 4, 4, 5, 1, 0],
    [3, 4, 9, 2, 8, 3, 1, 2, 6, 9, 7, 0, 2, 4, 2, 0],
    [5, 1, 8, 8, 4, 6, 8, 5, 2, 4, 1, 6, 2, 2, 9, 7],
  ])
);
