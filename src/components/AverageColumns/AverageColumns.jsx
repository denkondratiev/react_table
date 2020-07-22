import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { AverageColumnsShape } from '../../helpers/shapes'
import { connect } from 'react-redux'

const AverageColumns = (props) => {
  // eslint-disable-next-line react/prop-types
  const { columns, rows, table } = props

  const columnLine = [...Array(columns).keys()]
  // eslint-disable-next-line react/prop-types
  const onlyAmount = table.map(item => item.amount)

  const averageColumnSum = columnLine.map((_, index) => {
    let sum = 0
    for (let i = index; i < onlyAmount.length; i += columns) {
      sum += onlyAmount[i]
    }
    return Math.floor(sum / rows)
  })

  return (
    <>
      {<tr>{averageColumnSum.map(item => (
        <td key={uuidv4()}>Average sum: {item}</td>
      ))}
      </tr>}
    </>
  )
}

AverageColumnsShape.propTypes = AverageColumnsShape.isRequired

const mapStateToProps = (state) => ({
  columns: state.columns,
  rows: state.rows,
  table: state.table
})

export default connect(mapStateToProps)(AverageColumns)
