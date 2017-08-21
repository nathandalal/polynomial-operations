import React from 'react'

import Model          from './Multiply/Model.jsx'
import InputEquation  from './Multiply/InputEquation.jsx'
import AnswerEquation from './Multiply/AnswerEquation.jsx'

import NumberInput    from './General/NumberInput.jsx'
import Legend         from './General/Legend.jsx'

export default class Multiply extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.getInitialState()
    this.RANGE = 10
  }

  getInitialState() {
    let variables = {
      m1: 1,
      b1: 2,
      m2: -3,
      b2: 4,
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
    let { m1text, b1text, m2text, b2text, 
          m1error, b1error, m2error, b2error } = this.state

    let error = (m1error || b1error || m2error || b2error)

    return (
      <div className="content container has-text-centered">
        <div className="columns is-multiline">
          <div className="column is-3-desktop is-6-tablet">
            <InputEquation {...this.state} />
          </div>
          <div className="column is-3-desktop is-6-tablet">
            <NumberInput error={m1error}  placeholder="1st Coefficient" value={m1text} onChangeFn={this.changeInput.bind(this, 'm1')} range={this.RANGE} />
            <NumberInput error={b1error}  placeholder="1st Constant"    value={b1text} onChangeFn={this.changeInput.bind(this, 'b1')} range={this.RANGE} />
            <NumberInput error={m2error}  placeholder="2nd Coefficient" value={m2text} onChangeFn={this.changeInput.bind(this, 'm2')} range={this.RANGE} />
            <NumberInput error={b2error}  placeholder="2nd Constant"    value={b2text} onChangeFn={this.changeInput.bind(this, 'b2')} range={this.RANGE} />
            <p className={`help is-${error ? "danger" : "info"}`}>
              {error
                ? `Inputs must be integers between -${this.RANGE} and ${this.RANGE}.`
                : `Change the inputs to integers between -${this.RANGE} and ${this.RANGE}.`}
            </p>
          </div>
          <div className="column is-3-desktop is-6-tablet">
            <Legend />
          </div>
          <div className="column is-3-desktop is-6-tablet">
            <AnswerEquation {...this.state} />
          </div>
        </div>
        <hr/>
        <Model error={error} {...this.state} />
      </div>
    )
  }
}