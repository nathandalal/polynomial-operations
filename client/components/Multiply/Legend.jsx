import React from 'react'
import colors from '../../utils/colors'

const Block = ({width, height, color}) => (
  <div><div style={{
    margin: "10px auto",
    border: "2px solid",
    background: color,
    width, height
  }}/></div>
)

const Legend = () => (
  <div className="box columns is-multiline is-mobile is-gapless" style={{padding: 15}}>
    <div className="column is-one-thirds-desktop has-text-centered">
      <div><b>Terms</b></div>
      <div style={{margin:5}}>X<sup>2</sup></div>
      <div style={{margin:10}}>X</div>
      <div style={{margin:5}}>1</div>
    </div>
    <div className="column is-one-thirds-desktop has-text-centered">
      <div><b>Positive</b></div>
      <Block width={30} height={30} color={colors.degree2}/>
      <Block width={45} height={15} color={colors.degree1}/>
      <Block width={20} height={20} color={colors.degree0}/>
    </div>
    <div className="column is-one-thirds-desktop has-text-centered">
      <div><b>Negative</b></div>
      <Block width={30} height={30} color={colors.degree2Negative}/>
      <Block width={45} height={15} color={colors.degree1Negative}/>
      <Block width={20} height={20} color={colors.degree0Negative}/>
    </div>
  </div>
)

export default Legend