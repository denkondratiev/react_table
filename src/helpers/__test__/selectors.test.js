import { getRowSum, getAverageRowSum } from '../selectors'

const rows1 = {
  row1: ['somecell1', 'somecell2'],
  row2: ['somecell3', 'somecell4']
}

const cells1 = {
  somecell1: { id: 'somecell1', amount: 1 },
  somecell2: { id: 'somecell2', amount: 2 },
  somecell3: { id: 'somecell3', amount: 0 },
  somecell4: { id: 'somecell4', amount: 1 }
}

// getRowSum TEST CASES

test('should return correct sum for each row', () => {
  const result = getRowSum.resultFunc(rows1, cells1)
  expect(result).toEqual([3, 1])
})

// getAverageRowSum TEST CASES

test('should return correct average sum for each columns', () => {
  const result = getAverageRowSum.resultFunc(rows1, cells1, 2)
  expect(result).toEqual([0, 1])
})
