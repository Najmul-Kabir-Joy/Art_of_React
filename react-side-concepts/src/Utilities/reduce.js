const nums = [1, 2, 3, 4, 6, 7];
const addition = (prev, curr) => prev + curr;
nums.reduce(addition, 0);
