import { v4 as uuidv4 } from 'uuid'

export const randomGenerate = item => ({
  cellId: uuidv4(),
  amount: Math.floor(Math.random() * 999),
  isLight: false,
  showPercent: false
})

export const generateMatrix = (rows, columns) => {
  const matrix = []
  for (let i = 0; i < rows; i++) {
    matrix[i] = []
    for (let j = 0; j < columns; j++) {
      matrix[i][j] = randomGenerate()
    }
  }

  return matrix
}
