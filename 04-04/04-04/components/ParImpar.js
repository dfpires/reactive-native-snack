import React from 'react'
import {View, Text} from 'react-native'
import Estilo from './Estilo'

export default ({num = 0}) => {

  return (
    <View>
      <Text style={Estilo.fonteGrande}> O resultado é </Text>
      {
        num % 2 == 0 ? 
        <Text style={Estilo.fonteGrande}>  Par </Text> : 
        <Text style={Estilo.fonteGrande}>  Ímpar </Text>
      }
    </View>
  )
}