import React from 'react'

const ModelBoxes = ({boxWidth, boxHeight, nRows, nCols, color, degree}) => {
  let innerText = (
    degree == 2 ? <span>x<sup>2</sup></span> : (degree == 1 ? "x" : "1")
  )

  nRows = Math.abs(nRows)
  nCols = Math.abs(nCols)

  return (
    <div style={{height: boxHeight * nRows, display: "inline-block", verticalAlign: "middle"}}>
      {(nRows !== 0 && nCols !== 0) ? Array(nRows).fill(0).map((v1, i) => (
        <div key={i} style={{width: boxWidth * nCols, height: boxHeight, verticalAlign: "middle"}}>
        {Array(nCols).fill(0).map((v2, j) => (
          <div key={j} style={{backgroundColor: color, border: "3px solid", width: boxWidth, height: boxHeight, float: "left", verticalAlign: "middle"}}>
            <div style={{fontSize: `${(boxHeight * boxWidth / 300) + 8}px`, height: boxHeight, verticalAlign: "middle", marginTop: `${(boxHeight / 2) - ((boxHeight * boxWidth / 300) + 8)}px`}}>{innerText}</div>
          </div>
        ))}
        </div>
      )) : ""} 
    </div>
  )
}

export default ModelBoxes