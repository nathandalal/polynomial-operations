import React from 'react'

import Model          from './Multiply/Model.jsx'
import InputEquation  from './Multiply/InputEquation.jsx'
import Legend         from './Multiply/Legend.jsx'
import AnswerEquation from './Multiply/AnswerEquation.jsx'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.getInitialState()
    this.RANGE = 10
  }

  getInitialState() {
    let variables = {
      m1: 1,
      b1: 2,
      m2: 3,
      b2: 4,
    }

    let varlist = Object.keys(variables)
    varlist.forEach(variable => variables[`${variable}text`] = `${variables[variable]}`)

    variables.error = false
    return variables
  }

  changeInput(variable, {target}) {
    let stateChange = {}
    
    if(!target.value) {
      stateChange[variable] = 0
      stateChange[`${variable}text`] = ""
      this.setState(stateChange)
    } 
    else if(/[\d-]/.test(target.value)) {
      let val = parseInt(target.value, 10)
      stateChange.error = (val > this.RANGE || val < -this.RANGE)
      val = (val > this.RANGE || val < -this.RANGE) ? 0 : val

      stateChange[variable] = val
      stateChange[`${variable}text`] = target.value
      this.setState(stateChange)
    }
  }

  render() {
    console.log(this.state)
    let { m1, b1, m2, b2, m1text, b1text, m2text, b2text, error } = this.state

    return (
      <div className="content container has-text-centered">
        <div className="columns is-multiline">
          <div className="column is-3-desktop is-6-tablet">
            <InputEquation {...this.state} />
          </div>
          <div className="column is-3-desktop is-6-tablet">
            <input className="input" type="number" placeholder="1st Coefficient" value={m1text} onChange={this.changeInput.bind(this, 'm1')}/>
            <input className="input" type="number" placeholder="1st Constant" value={b1text} onChange={this.changeInput.bind(this, 'b1')}/>
            <input className="input" type="number" placeholder="2nd Coefficient" value={m2text} onChange={this.changeInput.bind(this, 'm2')}/>
            <input className="input" type="number" placeholder="2nd Constant" value={b2text} onChange={this.changeInput.bind(this, 'b2')}/>
            <p className={`help is-${error ? "danger" : "info"}`}>
              {error ? `Inputs must range from -${this.RANGE} to ${this.RANGE} inclusive.` : "Please change the inputs, negative values work as well!"}
            </p>
          </div>
          <div className="column is-3-desktop is-6-tablet">
            <Legend />
          </div>
          <div className="column is-3-desktop is-6-tablet">
            <AnswerEquation {...this.state} />
          </div>
        </div>

        <Model {...this.state} />
      </div>
    )
  }
}