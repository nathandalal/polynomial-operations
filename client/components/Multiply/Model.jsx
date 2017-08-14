import React from 'react'
import ModelBoxes from './ModelBoxes.jsx'
import colors from '../../utils/colors'

export default class Model extends React.Component {
  constructor(props) {
    super(props)
    this.state = { screenWidth: window.innerWidth }
  }

  updateDimensions() {
    this.setState({screenWidth: window.innerWidth })
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions.bind(this))
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this))
  }

  render() {
    let { m1, b1, m2, b2 } = this.props
    let { screenWidth } = this.state

    let unitWidth = Math.max(screenWidth / 60, 16)

    let m1m2Color = m1 * m2 >= 0 ? colors.degree2 : colors.degree2Negative
    let m1b2Color = m1 * b2 >= 0 ? colors.degree1 : colors.degree1Negative
    let m2b1Color = m2 * b1 >= 0 ? colors.degree1 : colors.degree1Negative
    let b1b2Color = b1 * b2 >= 0 ? colors.degree0 : colors.degree0Negative

    let leftMargin = screenWidth > 500 ? (screenWidth > 900 ? (unitWidth * (3 * m2 + b2) + screenWidth / unitWidth) + 30 : screenWidth / 5) : screenWidth / 8

    return (
      <div style={{position: "relative"}} ref="model">
        <div style={{margin: "5px auto", padding: 0, verticalAlign: "middle"}}>
          <div style={{width: unitWidth * 3 * m2, display: "inline-block"}}>{m2}x</div>
          <div style={{display: "inline-block"}}>+</div>
          <div style={{width: unitWidth * b2, display: "inline-block"}}>{b2}</div>
        </div>
        <div style={{margin: "0 auto", padding: 0, verticalAlign: "middle"}}>
          <div style={{position: "absolute", margin: "0 auto", left: leftMargin, top: (unitWidth * 3 * m1 / 2)}}>{m1}x</div>
          <ModelBoxes nRows={m1} nCols={m2} color={m1m2Color} degree={2} boxWidth={unitWidth * 3} boxHeight={unitWidth * 3} />
          <ModelBoxes nRows={m1} nCols={b2} color={m1b2Color} degree={1} boxWidth={unitWidth} boxHeight={unitWidth * 3} />
        </div>
        <div style={{position: "absolute", margin: "0 auto", left: leftMargin, top: (unitWidth * 3 * m1)}}>+</div>
        <div style={{margin: "0 auto", padding: 0, verticalAlign: "middle"}}>
          <div style={{position: "absolute", margin: "0 auto", left: leftMargin, top: (unitWidth * (3 * m1 + b1))}}>{b1}</div>
          <ModelBoxes nRows={b1} nCols={m2} color={m2b1Color} degree={1} boxWidth={unitWidth * 3} boxHeight={unitWidth} />
          <ModelBoxes nRows={b1} nCols={b2} color={b1b2Color} degree={0} boxWidth={unitWidth} boxHeight={unitWidth} />
        </div>
      </div>
    )
  }
}