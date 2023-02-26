// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (!matrix) {
    return []
  }
  const result = []

  matrix.forEach((arr, i) => {
    if (i % 2 !== 0) {
      result.push(...arr.reverse())
    } else {
      result.push(...arr)
    }
  })

  return result
}