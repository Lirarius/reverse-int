module.exports = function reverse(n) {
  const nString = Math.abs(n).toString();
  let nNew = '';
  let Counter = nString.length;
  while (Counter !== 0) {
    nNew += nString[Counter - 1];
    Counter -= 1;
  }
  return nNew;
};
