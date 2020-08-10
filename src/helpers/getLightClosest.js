export const getLightClosest = (id, cells, lightsAmount) => {
  const arr = Object.values(cells).map(item => ({
    ...item,
    difference: Math.abs(item.amount - cells[id].amount)
  })).sort((a, b) => a.difference - b.difference)
    .slice(0, Number(lightsAmount))
    .map(item => item.id)

  const obj = {}

  for (const id of arr) {
    obj[id] = true
  }

  return obj
}
