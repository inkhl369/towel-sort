
// You should implement your task here.

module.exports = function towelSort (matrix) {
    var arr = [];
    if (matrix == undefined) {
    return [];
    }
    else {
    for (var i = 0; i < matrix.length; i++) {
    if (i%2 == 1) {
    for (var j = matrix[i].length-1; j > 0; j--) {
    for (var k = 0; k < j; k++) {
    if (matrix[i][k] < matrix[i][k + 1]) {
    variab = matrix[i][k];
    matrix[i][k] = matrix[i][k + 1];
    matrix[i][k + 1] = variab;
            }
          }
        }
      }
    }
    for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
    arr.push(matrix[i][j]);
  }
}
}
return arr;
}    
