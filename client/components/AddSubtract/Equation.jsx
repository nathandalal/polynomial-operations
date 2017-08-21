import React from 'react'

const Equation = ({title, a, b, c, subtracted}) => {
  let formatPolynomial = () => {
    if(!a && !b) return <span>{c}</span>
    if(!a) return <span>{b == 1 ? "" : b}x {c >= 0 ? "+" : "-"} {Math.abs(c)}</span>
    if(!b) return <span>{a == 1 ? "" : a}x<sup>2</sup> {c >= 0 ? "+" : "-"} {Math.abs(c)}</span>
    return <span>{a == 1 ? "" : a}x<sup>2</sup> {b >= 0 ? "+" : "-"} {Math.abs(b) == 1 ? "" : Math.abs(b)}x {c >= 0 ? "+" : "-"} {Math.abs(c)}</span>
  }

  return (
    <div className="content">
      <h2 className={subtracted ? "has-text-danger" : ""}>{title}</h2>
      <h6>{formatPolynomial()}</h6>
    </div>
  )
}

export default Equation