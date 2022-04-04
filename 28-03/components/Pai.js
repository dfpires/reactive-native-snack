import React from 'react'
import {Text} from 'react-native'
import Estilo from './Estilo'
import Filho from './Filho'

export default props => {
  let x = 40
  let y = 80
  return (
    <>
      <Filho a={x} b={y}/>
      <Filho a={x+10} b={y+20}/>
    </>
  )
}