import React from 'react'

import Model          from './Model.jsx'
import Equation       from './Equation.jsx'

import NumberInput    from '../General/NumberInput.jsx'
import Legend         from '../General/Legend.jsx'

export default class AddSubtract extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.getInitialState()
    this.RANGE = 8
  }

  getInitialState() {
    let variables = {
      a1: 2,
      b1: -1,
      c1: 4,
      a2: 1,
      b2: 2,
      c2: -2,
    }

    let varlist = Object.keys(variables)
    varlist.forEach(variable => variables[`${variable}text`] = `${variables[variable]}`)
    varlist.forEach(variable => variables[`${variable}error`] = false)

    return variables
  }

  changeInput(variable, {target}) {
    let stateChange = {}

    if(target.value == "-" || !(target.value)) {
      stateChange[variable] = 0
      stateChange[`${variable}text`] = target.value
      stateChange[`${variable}error`] = false
      this.setState(stateChange)
    }
    else if(/[0-9]+/.test(target.value)) {
      let val = parseInt(target.value, 10)
      stateChange[`${variable}error`] = (val > this.RANGE || val < -this.RANGE)
      val = (val > this.RANGE || val < -this.RANGE) ? 0 : val

      stateChange[variable] = val
      stateChange[`${variable}text`] = target.value
      this.setState(stateChange)
    }
  }

  render() {
    let { a1, b1, c1, a2, b2, c2,
          a1text, b1text, c1text, a2text, b2text, c2text,
          a1error, b1error, c1error, a2error, b2error, c2error,
          subtractionTransition } = this.state

    let { subtractionMode } = this.props

    let error1 = (a1error || b1error || c1error)
    let error2 = (a2error || b2error || c2error)
    let error = error1 || error2

    return (
      <div className="content container has-text-centered">
        <div className="columns is-multiline">
          <div className="column is-3-desktop is-6-tablet">
            <Equation title={"First Input"} a={a1} b={b1} c={c1} />
            <NumberInput error={a1error}  placeholder="Coefficient of X&sup2; Term" value={a1text} onChangeFn={this.changeInput.bind(this, 'a1')} range={this.RANGE} />
            <NumberInput error={b1error}  placeholder="Coefficient of X Term"       value={b1text} onChangeFn={this.changeInput.bind(this, 'b1')} range={this.RANGE} />
            <NumberInput error={c1error}  placeholder="Constant"                    value={c1text} onChangeFn={this.changeInput.bind(this, 'c1')} range={this.RANGE} />
            <p className={`help is-${error1 ? "danger" : "info"}`}>
              {error1 
                ? `Inputs must be integers between -${this.RANGE} and ${this.RANGE}.`
                : `Change the inputs to integers between -${this.RANGE} and ${this.RANGE}.`}
            </p>
          </div>
          <div className="column is-3-desktop is-6-tablet">
            <Equation title={"Second Input"} 
              a={a2}
              b={b2}
              c={c2}
              subtractionMode={subtractionMode}
              subtractionTransition={subtractionTransition} />
            <NumberInput error={a2error}  placeholder="Coefficient of X&sup2; Term" value={a2text} onChangeFn={this.changeInput.bind(this, 'a2')} range={this.RANGE} />
            <NumberInput error={b2error}  placeholder="Coefficient of X Term"       value={b2text} onChangeFn={this.changeInput.bind(this, 'b2')} range={this.RANGE} />
            <NumberInput error={c2error}  placeholder="Constant"                    value={c2text} onChangeFn={this.changeInput.bind(this, 'c2')} range={this.RANGE} />
            <p className={`help is-${error2 ? "danger" : "info"}`}>
              {error2 
                ? `Inputs must be integers between -${this.RANGE} and ${this.RANGE}.`
                : `Change the inputs to integers between -${this.RANGE} and ${this.RANGE}.`}
            </p>
          </div>
          <div className="column is-3-desktop is-6-tablet">
            <h2>Legend</h2>
            <Legend />
          </div>
          <div className="column is-3-desktop is-6-tablet">
            <Equation title={"The Answer"} 
              a={subtractionMode ? (a1 - a2) : (a1 + a2)}
              b={subtractionMode ? (b1 - b2) : (b1 + b2)}
              c={subtractionMode ? (c1 - c2) : (c1 + c2)} />
          </div>
        </div>
        {subtractionMode ? <button 
          className={`button is-${subtractionTransition ? "info" : "danger is-outlined"}`}
          onClick={(() => this.setState({subtractionTransition: !subtractionTransition})).bind(this)}>
          {subtractionTransition ? "Back to Normal Subtraction" : "Distribute the Negative Sign"}
        </button> : ""}
        <hr/>
        <Model error={error} 
          subtractionMode={subtractionMode}
          subtractionTransition={subtractionTransition}
          a1={a1} b1={b1} c1={c1} a2={a2} b2={b2} c2={c2} />

        <div className="content">
          {error ? 
          <h3 className="has-text-danger">
            Inputs must be integers between -{this.RANGE} and {this.RANGE}.
          </h3> : ""}
          <h4 style={{marginTop: 50}}>
            Remember that positive and negative numbers are opposites that eliminate each other.<br/>
            Two negative signs makes a positive sign.
          </h4>
        </div>
      </div>
    )
  }
}