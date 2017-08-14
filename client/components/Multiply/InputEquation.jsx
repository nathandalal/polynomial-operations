import React from 'react'

const InputEquation = ({m1, m2, b1, b2}) => {
  let getEquation = () => {
    m1 = m1 ? `${m1 == 1 ? "" : m1}x` : ""
    m2 = m2 ? `${m2 == 1 ? "" : m2}x` : ""

    let firstTerm = m1 ? `${m1}${b1 ? ` ${b1 >= 0 ? "+" : "-"} ${Math.abs(b1)}` : ""}` : b1
    let secondTerm = m2 ? `${m2}${b2 ? ` ${b2 >= 0 ? "+" : "-"} ${Math.abs(b2)}` : ""}` : b2

    if(!m1 && !b1) return 0
    if(!m2 && !b2) return 0

    return `(${firstTerm})(${secondTerm})`
  }

  return (
    <div className="content">
      <h3>The Input</h3>
      <h5>{getEquation()}</h5>
    </div>
  )
}

export default InputEquation