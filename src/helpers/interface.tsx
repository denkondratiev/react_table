import { SyntheticEvent } from 'react'

export interface TableRowProps {
  id: string
  row: Array<string>
  cells: { [name: string]: { id: string, amount: number } }
  lightList: { [name: string]: boolean }
  rowSum: number
  onMouseEnterHandler: (event: SyntheticEvent<HTMLTableCellElement>) => void
  onMouseLeaveHandler: () => void
  onClickIncrement: (event: SyntheticEvent<HTMLTableCellElement>) => void
}

export interface TableCellProps {
  id: string
  amount: string | number
  styleString: string
  onMouseEnterHandler: (event: SyntheticEvent<HTMLTableCellElement>) => void
  onMouseLeaveHandler: () => void
  onClickIncrement: (event: SyntheticEvent<HTMLTableCellElement>) => void
}

export interface TableCellSumProps {
  rowSum: number
  onMouseEnterPercent: () => void
  onMouseLeavePercent: () => void
}
