export function filterMap(arr, callback) {
  const res = [];
  for (const i of arr) {
    const val = callback(i);
    if (val !== false) {
      res.push(val);
    }
  }
  return res;
}
