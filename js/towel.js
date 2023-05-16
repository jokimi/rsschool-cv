module.exports = function towelSort (matrix) {
  let result = [];
  for(let i in matrix){
    if(i == 0 || i % 2 == 0){
      result = result.concat(matrix[i])
    }else{
      result = result.concat(matrix[i].reverse())
    }
  }
  return result;
}
