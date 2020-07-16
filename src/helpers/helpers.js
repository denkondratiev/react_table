import { v4 as uuidv4 } from 'uuid'

export const randomGenerate = item => ({
  amount: Math.floor(Math.random() * 999),
  id: uuidv4(),
  isLight: false,
  showPercent: false
})
