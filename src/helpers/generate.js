import { v4 as uuidv4 } from 'uuid'

export const generateTable = (rowsAmount, columnsAmount) => {
  const table = []
  const rows = {}
  const cells = {}

  for (let i = 0; i < rowsAmount; i++) {
    const rowId = uuidv4()
    table[i] = rowId
    rows[rowId] = []

    for (let j = 0; j < columnsAmount; j++) {
      const cellId = uuidv4()
      rows[rowId][j] = cellId

      cells[cellId] = {
        id: cellId,
        amount: Math.floor(Math.random() * 999)
      }
    }
  }

  return { table, rows, cells }
}
