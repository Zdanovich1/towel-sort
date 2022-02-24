
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let result = [];
  if (!matrix) {
    //console.log('puk')
    return []
  }
  for (let i = 0; i < matrix.length; i++) {
    //console.log(matrix[i])
    //console.log(matrix[i].length) 

    if (i % 2 === 0) {
      for (let j = 0; j < matrix[i].length; j++) {
        result.push(matrix[i][j])
      }
    } else if (i % 2 !== 0) {
      for (let j = matrix[i].length - 1; j >= 0; j--) {
        result.push(matrix[i][j])
      }
    } else if (!matrix) return []


  }

  console.log(result)
  return result;
}
