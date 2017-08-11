import React from 'react'
import ModelBoxes from './ModelBoxes.jsx'
import colors from '../../utils/colors'

const Model = ({ m1, b1, m2, b2 }) => {
  let unitWidth = Math.max(window.innerWidth / 60, 16)

  let m1m2Color = m1 * m2 >= 0 ? colors.degree2 : colors.degree2Negative
  let m1b2Color = m1 * b2 >= 0 ? colors.degree1 : colors.degree1Negative
  let m2b1Color = m2 * b1 >= 0 ? colors.degree1 : colors.degree1Negative
  let b1b2Color = b1 * b2 >= 0 ? colors.degree0 : colors.degree0Negative

  return (
    <div>
      <div style={{margin: "0 auto", padding: 0, verticalAlign: "middle"}}>
        <ModelBoxes nRows={m1} nCols={m2} color={m1m2Color} degree={2} boxWidth={unitWidth * 3} boxHeight={unitWidth * 3} />
        <ModelBoxes nRows={m1} nCols={b2} color={m1b2Color} degree={1} boxWidth={unitWidth} boxHeight={unitWidth * 3} />
      </div>
      <div style={{margin: "0 auto", padding: 0, verticalAlign: "middle"}}>
        <ModelBoxes nRows={b1} nCols={m2} color={m2b1Color} degree={1} boxWidth={unitWidth * 3} boxHeight={unitWidth} />
        <ModelBoxes nRows={b1} nCols={b2} color={b1b2Color} degree={0} boxWidth={unitWidth} boxHeight={unitWidth} />
      </div>
    </div>
  )
}

export default Model