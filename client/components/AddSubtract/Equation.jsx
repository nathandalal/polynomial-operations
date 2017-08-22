import React from 'react'

const Equation = ({title, a, b, c, subtracted}) => {
  let formatCoefficient = (coeff) => Math.abs(coeff) == 1 ? (coeff < 0 ? "-" : "") : coeff

  let formatPolynomial = (a, b, c) => {
    if(!a && !b) return <span>{c}</span>
    if(!a) return <span>{formatCoefficient(b)}x {c >= 0 ? "+" : "-"} {Math.abs(c)}</span>
    if(!b) return <span>{formatCoefficient(a)}x<sup>2</sup> {c >= 0 ? "+" : "-"} {Math.abs(c)}</span>
    return <span>{formatCoefficient(a)}x<sup>2</sup> {b >= 0 ? "+" : "-"} {Math.abs(b) == 1 ? "" : Math.abs(b)}x {c >= 0 ? "+" : "-"} {Math.abs(c)}</span>
  }

  return (
    <div className="content">
      <h2 className={subtracted ? "has-text-danger" : ""}>{title}</h2>
      {subtracted ? <h6>-({formatPolynomial(a, b, c)})</h6> : ""}
      {subtracted ? <h6>{formatPolynomial(-a, -b, -c)}</h6> : <h6>{formatPolynomial(a, b, c)}</h6>}
    </div>
  )
}

export default Equation