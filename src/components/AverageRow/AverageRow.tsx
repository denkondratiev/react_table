import React from 'react'
import { getAverageRowSum } from '../../helpers/selectors'
import { useSelector } from 'react-redux'

const AverageRow: React.FC = () => {
  const averageArray = useSelector(getAverageRowSum)

  return (
    <>
      {<tr>{averageArray.map((item, index) => (
        <td key={index}>Average sum: {item}</td>
      ))}
      </tr>}
    </>
  )
}

export default React.memo(AverageRow)
