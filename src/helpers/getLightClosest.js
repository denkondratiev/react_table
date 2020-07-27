export const getLightClosest = (id, cells, lightsAmount) => {
  const arr = Object.values(cells).map(item => ({
    ...item,
    difference: Math.abs(item.amount - cells[id].amount)
  })).sort((a, b) => a.difference - b.difference)
    .slice(0, Number(lightsAmount))

  const obj = {}

  for (const item of arr) {
    obj[item.id] = item
  }

  return obj
}
