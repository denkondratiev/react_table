import { v4 as uuidv4 } from 'uuid'
import { RowsParams, CellsParams } from '../store/types'

export const generateTable = (rowsAmount: string | number, columnsAmount: string | number) => {
  const table: Array<string> = new Array(+rowsAmount).fill(0).map((item: string) => item = uuidv4())

  const preparedArray: Array<string> = new Array(+rowsAmount * +columnsAmount).fill(0).map((item: string) => item = uuidv4())

  const rows = table.reduce(
    (acum: RowsParams, rowID, index) => (
      (acum[rowID] = preparedArray.slice(
        +columnsAmount * index,
        +columnsAmount * index + +columnsAmount
      )),
      acum
    ),
    {}
  )

  const cells = preparedArray.reduce(
    (acum: CellsParams, cellID: string) => (
      (acum[cellID] = {
        id: cellID,
        amount: Math.floor(Math.random() * 999)
      }),
      acum
    ),
    {}
  )

  return { table, rows, cells }
}
