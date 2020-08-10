import { getLightClosest } from '../getLightClosest'

const id = 'somecell1'

const cells = {
  somecell1: { id: 'somecell1', amount: 1 },
  somecell2: { id: 'somecell2', amount: 100 },
  somecell3: { id: 'somecell3', amount: 2 },
  somecell4: { id: 'somecell4', amount: 5 },
  somecell5: { id: 'somecell5', amount: 3 },
  somecell6: { id: 'somecell6', amount: 10 }
}

const lightsAmount = 3

test('should return correct object of light cells true', () => {
  const result = getLightClosest(id, cells, lightsAmount)
  expect(result).toEqual({
    somecell1: true,
    somecell3: true,
    somecell5: true
  })
})
