module.exports = function check(str, bracketsConfig) {
  let stack = bracketsConfig.map(item => item.join(""));
  while (stack.some(i => str.includes(i))){
    stack.forEach(value => str = str.replace(value, ''));
  }
  return !str
}
