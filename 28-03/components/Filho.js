import React from 'react'
import {Text} from 'react-native'
import Estilo from './Estilo'

export default props => {

  return (
    <>
      <Text style={Estilo.fonteGrande}> {props.a} </Text>
      <Text style={Estilo.fonteGrande}> {props.b} </Text>
    </>
  )
}