import React from 'react'
import {Text} from 'react-native'
import Estilo from './Estilo'

export default props => {

  return (
    <Text style={Estilo.fonteGrande}>
      {props.nome} {props.sobrenome}
    </Text>
  )
}