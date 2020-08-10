import { createSelector } from 'reselect'
import { State } from '../store/types'

export const getRows = (state: State) => state.rows

export const getCells = (state: State) => state.cells

export const getTable = (state: State) => state.table

export const getRowsAmount = (state: State) => state.params.rowsAmount

export const getColumnsAmount = (state: State) => state.params.columnsAmount

export const getLightsAmount = (state: State) => state.params.lightsAmount

export const getShowButtons = (state: State) => state.buttons

export const getRowSum = createSelector(
  [getRows, getCells],
  (rows, cells) => {
    const sumArr = Object.values(rows).map(row => (
      row.map(item => cells[item].amount).reduce((prev, cur) => prev + cur, 0)
    ))

    return sumArr
  }
)

export const getAverageRowSum = createSelector(
  [getRows, getCells, getColumnsAmount],
  (rows, cells, columnsAmount) => {
    const onlyAmount = Object.values(rows).map(row => (
      row.map(item => cells[item].amount)
    ))

    const averageRow = onlyAmount.reduce((acum, cur) =>
      cur.map((amount, index) => (acum[index] += amount)), new Array(+columnsAmount).fill(0)
    )
    return averageRow.map((item: number) => Math.floor(item / onlyAmount.length))
  }
)
