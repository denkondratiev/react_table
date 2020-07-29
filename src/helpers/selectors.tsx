import { createSelector } from 'reselect'
import type { State } from '../store/actions'

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
  [getRows, getCells],
  (rows, cells) => {
    const onlyAmount = Object.values(rows).map(row => (
      row.map(item => cells[item].amount)
    ))

    const res: number[] = []
    for (let i = 0; i < onlyAmount.length; i++) {
      for (let j = 0; j < onlyAmount[i].length; j++) {
        res[j] = (res[j] || 0) + Math.floor(onlyAmount[i][j] / onlyAmount.length)
      }
    }

    return res
  }
)
