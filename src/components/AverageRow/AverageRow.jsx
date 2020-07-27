import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { AverageRowShape } from '../../helpers/shapes'
import { connect } from 'react-redux'
import { getAverageRowSum } from '../../helpers/selectors'

const AverageRow = ({ averageArray }) => {
  return (
    <>
      {<tr>{averageArray.map(item => (
        <td key={uuidv4()}>Average sum: {item}</td>
      ))}
      </tr>}
    </>
  )
}

AverageRow.propTypes = AverageRowShape.isRequired

const mapStateToProps = (state) => ({
  averageArray: getAverageRowSum(state)
})

export default connect(mapStateToProps)(React.memo(AverageRow))
