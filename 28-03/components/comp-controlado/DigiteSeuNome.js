import React, {useState} from 'react'
import {View, TextInput, Text} from 'react-native'
import Estilo from '../Estilo'

export default props => {
  // variável de estado
  const [nome, setNome] = useState('Talys')
  return (
    <View>
      <Text> {nome} </Text>
      <TextInput
        placeholder={"Digite seu nome"}
        value={nome}
        onChangeText={nome => setNome(nome)}
        />
    </View>
  )
}