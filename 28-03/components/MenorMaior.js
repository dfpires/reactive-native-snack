import React from 'react'
import {Text} from 'react-native'
import Estilo from './Estilo'

export default props => (
  <Text style={Estilo.fonteGrande}>
    O valor {props.maior} é maior que o valor {props.menor}
  </Text>
)