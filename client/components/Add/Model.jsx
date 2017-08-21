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

    let { a1, b1, c1, a2, b2, c2 } = this.props
    let { screenWidth } = this.state

    let unitWidth = Math.max(screenWidth / 70, 16)

    let a1Color = a1 >= 0 ? colors.degree2 : colors.degree2Negative
    let b1Color = b1 >= 0 ? colors.degree1 : colors.degree1Negative
    let c1Color = c1 >= 0 ? colors.degree0 : colors.degree0Negative

    let a2Color = a2 >= 0 ? colors.degree2 : colors.degree2Negative
    let b2Color = b2 >= 0 ? colors.degree1 : colors.degree1Negative
    let c2Color = c2 >= 0 ? colors.degree0 : colors.degree0Negative

    let a1a2Color = a1 + a2 >= 0 ? colors.degree2 : colors.degree2Negative
    let b1b2Color = b1 + b2 >= 0 ? colors.degree1 : colors.degree1Negative
    let c1c2Color = c1 + c2 >= 0 ? colors.degree0 : colors.degree0Negative

    return (
      <div className="columns">
        <div className="column is-half">
          <h2>The Inputs</h2>
          <div className="columns is-multiline is-mobile">
            <div className="column is-one-thirds">
              <ModelBoxes nRows={1} nCols={a1} color={a1Color} degree={2} boxWidth={unitWidth * 2} boxHeight={unitWidth * 2} />
            </div>
            <div className="column is-one-thirds">
              <ModelBoxes nRows={1} nCols={b1} color={b1Color} degree={1} boxWidth={unitWidth}     boxHeight={unitWidth * 2} />
            </div>
            <div className="column is-one-thirds">
              <ModelBoxes nRows={1} nCols={c1} color={c1Color} degree={0} boxWidth={unitWidth}     boxHeight={unitWidth} />
            </div>
            <div className="column is-12"/>
            <div className="column is-one-thirds">
              <ModelBoxes nRows={1} nCols={a2} color={a2Color} degree={2} boxWidth={unitWidth * 2} boxHeight={unitWidth * 2} />
            </div>
            <div className="column is-one-thirds">
              <ModelBoxes nRows={1} nCols={b2} color={b2Color} degree={1} boxWidth={unitWidth}     boxHeight={unitWidth * 2} />
            </div>
            <div className="column is-one-thirds">
              <ModelBoxes nRows={1} nCols={c2} color={c2Color} degree={0} boxWidth={unitWidth}     boxHeight={unitWidth} />
            </div>
          </div>
        </div>
        <div className="column is-half">
          <h2>The Answer</h2>
          <div className="columns is-multiline is-mobile">
            <div className="column is-one-thirds">
              <ModelBoxes nRows={1} nCols={a1 + a2} color={a1a2Color} degree={2} boxWidth={unitWidth * 2} boxHeight={unitWidth * 2} />
            </div>
            <div className="column is-one-thirds">
              <ModelBoxes nRows={1} nCols={b1 + b2} color={b1b2Color} degree={1} boxWidth={unitWidth}     boxHeight={unitWidth * 2} />
            </div>
            <div className="column is-one-thirds">
              <ModelBoxes nRows={1} nCols={c1 + c2} color={c1c2Color} degree={0} boxWidth={unitWidth}     boxHeight={unitWidth} />
            </div>
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
}