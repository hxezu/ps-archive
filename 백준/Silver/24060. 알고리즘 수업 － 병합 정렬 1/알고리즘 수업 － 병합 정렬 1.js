let input = require("fs").readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);
const tmp = Array(N); 

let cnt = 0;
let answer = -1;

function mergeSort(p, r) {
  if (p >= r) return;

  const q = Math.floor((p + r) / 2);
  mergeSort(p, q);
  mergeSort(q + 1, r);
  merge(p, q, r);
}

function merge(p, q, r) {
  let i = p;
  let j = q + 1;
  let t = 0;

  while (i <= q && j <= r) {
    if (A[i] <= A[j]) {
      tmp[t++] = A[i++];
    } else {
      tmp[t++] = A[j++];
    }
  }

  while (i <= q) tmp[t++] = A[i++];
  while (j <= r) tmp[t++] = A[j++];

  for (let k = 0; k < t; k++) {
    A[p + k] = tmp[k];
    cnt++;
    if (cnt === K) {
      answer = tmp[k];
      return;
    }
  }
}

mergeSort(0, N - 1);

console.log(answer === -1 ? -1 : answer);
