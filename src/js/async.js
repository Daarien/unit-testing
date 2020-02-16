export function echo(data) {
  if (data) return Promise.resolve(data);
  else return Promise.reject(new Error("No data"));
}
