import React from 'react'
import { TableCellShape } from '../../helpers/shapes'
import { connect } from 'react-redux'
import { increment } from '../../store/actions'
import './TableCell.css'

const TableCell = (props) => {
  const {
    id,
    cell,
    incrementCell,
    lightArray,
    showPercent,
    percent,
    onMouseEnterHandler,
    onMouseLeaveHandler
  } = props

  let styleLight = {}

  const onClickHandler = (id) => {
    incrementCell(id)
  }

  if (lightArray[id]) {
    styleLight = { backgroundColor: '#6c757d' }
  }

  if (showPercent) {
    styleLight = { backgroundImage: `linear-gradient(90deg, rgba(220,53,69,1) ${percent}%, rgba(108,117,125,1) ${percent}%)` }
  }

  return (
    <td
      id={id}
      onClick={(event) => onClickHandler(event.target.id)}
      onMouseEnter={(event) => onMouseEnterHandler(event.target.id)}
      onMouseLeave={onMouseLeaveHandler}
      style={styleLight}
    >
      {
        showPercent
          ? `${percent}%`
          : cell.amount
      }
    </td>
  )
}

TableCell.propTypes = TableCellShape.isRequired

const mapDispatchToProps = (dispatch) => ({
  incrementCell: id => dispatch(increment(id))
})

export default connect(null, mapDispatchToProps)(TableCell)
