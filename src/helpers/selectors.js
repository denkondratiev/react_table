import { createSelector } from 'reselect'

export const getRows = state => state.rows

export const getCells = state => state.cells

export const getColumns = state => state.columns

export const getTable = state => state.table

export const getRowsAmount = state => state.params.rowsAmount

export const getColumnsAmount = state => state.params.columnsAmount

export const getLightsAmount = state => state.params.lightsAmount

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
  [getRows, getCells],
  (rows, cells) => {
    const onlyAmount = Object.values(rows).map(row => (
      row.map(item => cells[item].amount)
    ))

    const res = []
    for (let i = 0; i < onlyAmount.length; i++) {
      for (let j = 0; j < onlyAmount[i].length; j++) {
        res[j] = (res[j] || 0) + Math.floor(onlyAmount[i][j] / onlyAmount.length)
      }
    }

    return res
  }
)
