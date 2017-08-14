import React from 'react'

export default class NumberInput extends React.Component {
  constructor(props) {
    super(props)
    this.handleDecimalPoints = this.handleDecimalPoints.bind(this)
  }

  handleDecimalPoints(event) { 
    if(event.key == ".") event.preventDefault()
  }

  render() {
    let { range, placeholder, value, onChangeFn, error } = this.props
    
    return (
      <input className={`input${error ? " is-danger" : ""}`} 
        type="number" step="1" min={-range} max={range}
        placeholder={placeholder} 
        value={value} 
        onKeyPress={this.handleDecimalPoints} 
        onChange={onChangeFn}/>
    )
  }
}