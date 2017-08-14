import React from 'react'
import ModelBoxes from './ModelBoxes.jsx'
import colors from '../../utils/colors'

export default class Model extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.getInitialState()
  }

  getInitialState() { return { screenWidth: window.innerWidth } }
  updateDimensions() { this.setState(this.getInitialState()) }
  componentDidMount() { window.addEventListener("resize", this.updateDimensions.bind(this)) }
  componentWillUnmount() { window.removeEventListener("resize", this.updateDimensions.bind(this)) }

  render() {
    let { m1, b1, m2, b2 } = this.props
    let { screenWidth } = this.state

    let unitWidth = Math.max(screenWidth / 60, 16)

    let m1m2Color = m1 * m2 >= 0 ? colors.degree2 : colors.degree2Negative
    let m1b2Color = m1 * b2 >= 0 ? colors.degree1 : colors.degree1Negative
    let m2b1Color = m2 * b1 >= 0 ? colors.degree1 : colors.degree1Negative
    let b1b2Color = b1 * b2 >= 0 ? colors.degree0 : colors.degree0Negative

    return (
      <div>
        <div style={{margin: "5px auto", padding: 0, verticalAlign: "middle"}}>
          {m2 ? <div style={{width: unitWidth * 3 * Math.abs(m2), display: "inline-block"}}>{m2}x</div> : ""}
          {b2 && m2 ? <div style={{display: "inline-block"}}>+</div> : ""}
          {b2 ? <div style={{width: unitWidth * Math.abs(b2), display: "inline-block"}}>{b2}</div> : ""}
        </div>
        <div style={{margin: "0 auto", padding: 0, verticalAlign: "middle", position: "relative", width: (unitWidth * (3 * Math.abs(m2) + Math.abs(b2)))}}>
          {m1 ? <div style={{position: "absolute", margin: "0 auto", left: -25, top: (unitWidth * 3 * Math.abs(m1) / 2) - 10}}>{m1}x</div> : ""}
          <ModelBoxes nRows={m1} nCols={m2} color={m1m2Color} degree={2} boxWidth={unitWidth * 3} boxHeight={unitWidth * 3} />
          <ModelBoxes nRows={m1} nCols={b2} color={m1b2Color} degree={1} boxWidth={unitWidth} boxHeight={unitWidth * 3} />
        </div>
        <div style={{margin: "0 auto", padding: 0, verticalAlign: "middle", position: "relative", width: (unitWidth * (3 * Math.abs(m2) + Math.abs(b2)))}}>
          <div style={{position: "relative"}}>
            {b1 && m1 ? <div style={{position: "absolute", margin: "0 auto", left: -25, top: -10}}>+</div> : ""}
            {b1 ? <div style={{position: "absolute", margin: "0 auto", left: -25, top: (unitWidth * Math.abs(b1) / 2) - 10}}>{b1}</div> : ""}
            <ModelBoxes nRows={b1} nCols={m2} color={m2b1Color} degree={1} boxWidth={unitWidth * 3} boxHeight={unitWidth} />
            <ModelBoxes nRows={b1} nCols={b2} color={b1b2Color} degree={0} boxWidth={unitWidth} boxHeight={unitWidth} />
          </div>
        </div>
      </div>
    )
  }
}