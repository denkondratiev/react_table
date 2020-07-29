import { v4 as uuidv4 } from 'uuid'
import { RowsParams, CellsParams } from '../store/actions'

export const generateTable = (rowsAmount: string | number, columnsAmount: string) => {
  const table: Array<string> = []
  const rows: RowsParams = {}
  const cells: CellsParams = {}

  for (let i = 0; i < Number(rowsAmount); i++) {
    const rowId = uuidv4()
    table[i] = rowId
    rows[rowId] = []

    for (let j = 0; j < Number(columnsAmount); j++) {
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
