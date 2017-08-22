import React from 'react'
import ModelBoxes from '../General/ModelBoxes.jsx'
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
    if (this.props.error) return this.renderError()

    let { a1, b1, c1, a2, b2, c2, subtractionMode, subtractionTransition } = this.props
    let animationStyle = { animationDuration: "2s" }

    let a1Color = a1 >= 0 ? colors.degree2 : colors.degree2Negative
    let b1Color = b1 >= 0 ? colors.degree1 : colors.degree1Negative
    let c1Color = c1 >= 0 ? colors.degree0 : colors.degree0Negative

    let a2Color = subtractionMode && subtractionTransition ? (a2 < 0 ? colors.degree2 : colors.degree2Negative) : (a2 >= 0 ? colors.degree2 : colors.degree2Negative)
    let b2Color = subtractionMode && subtractionTransition ? (b2 < 0 ? colors.degree1 : colors.degree1Negative) : (b2 >= 0 ? colors.degree1 : colors.degree1Negative)
    let c2Color = subtractionMode && subtractionTransition ? (c2 < 0 ? colors.degree0 : colors.degree0Negative) : (c2 >= 0 ? colors.degree0 : colors.degree0Negative)

    let a1a2Color = (subtractionMode ? (a1 - a2 >= 0) : (a1 + a2 >= 0)) ? colors.degree2 : colors.degree2Negative
    let b1b2Color = (subtractionMode ? (b1 - b2 >= 0) : (b1 + b2 >= 0)) ? colors.degree1 : colors.degree1Negative
    let c1c2Color = (subtractionMode ? (c1 - c2 >= 0) : (c1 + c2 >= 0)) ? colors.degree0 : colors.degree0Negative

    return (
      <div>
        <div className="columns is-multiline is-mobile">
          <div className="column is-2"/>
          <div className="column is-3">{this.buildBoxes(a1, a1Color, 2)}</div>
          <div className="column is-3">{this.buildBoxes(b1, b1Color, 1)}</div>
          <div className="column is-3">{this.buildBoxes(c1, c1Color, 0)}</div>
          <div className="column is-1"/>

          <div className="column is-12"/>

          <div className="column is-1">
            <span className="icon is-large">
              <i className={`fa fa-${subtractionMode ? (subtractionTransition ? "plus animated fadeIn" : "minus") : "plus"}`} style={animationStyle}/>
            </span>
          </div>
          {subtractionMode && !subtractionTransition ?
          <div className="column is-1">
            <span className="is-large" style={{fontSize: "40px"}}>
              (
            </span>
          </div> : <div className="column is-1"/>}
          <div className={`column is-3 ${subtractionTransition ? "animated bounce" : ""}`} style={animationStyle}>
            {this.buildBoxes(a2, a2Color, 2)}
          </div>
          <div className={`column is-3 ${subtractionTransition ? "animated bounce" : ""}`} style={animationStyle}>
            {this.buildBoxes(b2, b2Color, 1)}
          </div>
          <div className={`column is-3 ${subtractionTransition ? "animated bounce" : ""}`} style={animationStyle}>
            {this.buildBoxes(c2, c2Color, 0)}
          </div>
          {subtractionMode && !subtractionTransition ?
          <div className="column is-1">
            <span className="is-large" style={{fontSize: "40px"}}>
              )
            </span>
          </div> : <div className="column is-1"/>}
        </div>

        <hr />

        <div className="columns is-multiline is-mobile">
          <div className="column is-offset-2 is-3" style={animationStyle}>
            {this.buildBoxes(subtractionMode ? (a1 - a2) : (a1 + a2), a1a2Color, 2)}
          </div>
          <div className="column is-3" style={animationStyle}>
            {this.buildBoxes(subtractionMode ? (b1 - b2) : (b1 + b2), b1b2Color, 1)}
          </div>
          <div className="column is-3" style={animationStyle}>
            {this.buildBoxes(subtractionMode ? (c1 - c2) : (c1 + c2), c1c2Color, 0)}
          </div>
        </div>
      </div>
    )
  }

  renderError() {
    return (
      <div className="content">
        <h1>There's an error with your inputs.</h1>
      </div>
    )
  }

  buildBoxes(n, color, degree) {
    let unitWidth = Math.max(this.state.screenWidth / 55, 16)
    let boxWidth = degree == 2 ? unitWidth * 2 : unitWidth
    let boxHeight = degree > 0 ? unitWidth * 2 : unitWidth

    let makeBoxes = (r, c) => <ModelBoxes nRows={r} nCols={c} color={color} degree={degree} boxWidth={boxWidth} boxHeight={boxHeight}/>
    let makeColumnBoxes = (c) => makeBoxes(1, c)
    let makeRowBoxes = (r) => makeBoxes(r, 1)
    
    let absn = Math.abs(n)

    // cutoff at 4 for one row
    if (absn <= 4) return makeColumnBoxes(n)

    // cutoff at 8 for 2 rows
    if (absn <= 8) return n % 2 == 0 ? makeBoxes(2, parseInt(n / 2, 10)) : <div>{makeBoxes(2, parseInt(n / 2, 10))}{makeColumnBoxes(1)}</div>

    // rest at 3 rows
    return absn % 3 == 0 ? makeBoxes(3, parseInt(n / 3, 10)) : <div>{makeBoxes(3, parseInt(n / 3, 10))}{makeRowBoxes(parseInt(n % 3, 10))}</div>
  }
}