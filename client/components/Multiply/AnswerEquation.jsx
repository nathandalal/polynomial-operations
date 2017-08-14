import React from 'react'

const AnswerEquation = ({m1, m2, b1, b2}) => {
  let getEquation = () => {
    let a = m1 * m2
    let b = (b1 * m2) + (b2 * m1)
    let c = b1 * b2

    if(!a) {
      if(!b) return c
      else return `${b}x ${c >= 0 ? "+" : "-"} ${Math.abs(c)}`
    }

    if(!b) {
      if (!c) return <span>{a}x<sup>2</sup></span>
      else return <span>{a}x<sup>2</sup> {c >= 0 ? "+" : "-"} {Math.abs(c)}</span>
    }

    if (!c) return <span>{a}x<sup>2</sup> {b >= 0 ? "+" : "-"} {Math.abs(b)}x</span>
    return <span>{a}x<sup>2</sup> {b >= 0 ? "+" : "-"} {Math.abs(b)}x {c >= 0 ? "+" : "-"} {Math.abs(c)}</span>
  }

  return (
    <div className="content">
      <h3>The Answer</h3>
      <h5>{getEquation()}</h5>
    </div>
  )
}

export default AnswerEquation