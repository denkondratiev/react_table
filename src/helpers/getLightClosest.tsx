import { CellsParams } from '../store/actions'

export const getLightClosest = (id: string, cells: CellsParams, lightsAmount: string) => {
  const arr = Object.values(cells).map(item => ({
    ...item,
    difference: Math.abs(item.amount - cells[id].amount)
  })).sort((a, b) => a.difference - b.difference)
    .slice(0, Number(lightsAmount))
    .map(item => item.id)

  const obj: { [name: string]: boolean } = {}

  for (const id of arr) {
    obj[id] = true
  }

  return obj
}
