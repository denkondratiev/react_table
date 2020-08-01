import { CellsParams } from '../store/types'

export const getLightClosest = (id: string, cells: CellsParams, lightsAmount: string | number) => {
  const arr = Object.values(cells).map(item => ({
    ...item,
    difference: Math.abs(item.amount - cells[id].amount)
  })).sort((a, b) => a.difference - b.difference)
    .slice(0, +lightsAmount)
    .map(item => item.id)

  const resObj: { [name: string]: boolean } = arr.reduce((prev, cur) => ({ ...prev, [cur]: true }), {})

  return resObj
}
