import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { AverageColumnsShape } from '../../helpers/shapes'
import { connect } from 'react-redux'

const AverageColumns = (props) => {
  const { table } = props

  const onlyAmount = table.map(row => row.map(cell => cell.amount))

  const res = []
  for (let i = 0; i < onlyAmount.length; i++) {
    for (let j = 0; j < onlyAmount[i].length; j++) {
      res[j] = (res[j] || 0) + Math.floor(onlyAmount[i][j] / onlyAmount.length)
    }
  }

  const averageColumnSum = res

  return (
    <>
      {<tr>{averageColumnSum.map(item => (
        <td key={uuidv4()}>Average sum: {item}</td>
      ))}
      </tr>}
    </>
  )
}

AverageColumns.propTypes = AverageColumnsShape.isRequired

const mapStateToProps = (state) => ({
  table: state.table
})

export default connect(mapStateToProps)(AverageColumns)
