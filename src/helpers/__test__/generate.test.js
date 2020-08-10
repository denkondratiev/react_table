import { generateTable } from '../generate'

test('should return correct objects', () => {
  const { table, rows, cells } = generateTable(2, 3)

  expect(typeof table).toMatch(/object/)
  expect(typeof rows).toMatch(/object/)
  expect(typeof cells).toMatch(/object/)
})

test('should be correct table', () => {
  const { table } = generateTable(2, 3)
  const length = table.length
  const data = typeof table[0]

  expect(length).toBe(2)
  expect(data).toMatch(/string/)
})

test('should be correct row', () => {
  const { rows } = generateTable(2, 3)
  const length = Object.keys(rows).length
  const data = typeof Object.keys(rows)[0]

  expect(length).toBe(2)
  expect(data).toMatch(/string/)
})

test('should be correct cell object', () => {
  const { cells } = generateTable(2, 3)
  const length = Object.keys(cells).length
  const data = typeof Object.keys(cells)
  const oneCell = Object.values(cells)[0]

  expect(length).toBe(6)
  expect(data).toMatch(/object/)
  expect(oneCell).toEqual(
    expect.objectContaining({
      id: expect.any(String),
      amount: expect.any(Number)
    })
  )
})
