import React, {useState} from 'react'
import {Text, Button} from 'react-native'
import Estilo from './Estilo'

export default ({inicial = 0, passo = 1}) => {

  // criando variável que pode ser alterada
  const [numero, setNumero] = useState(inicial)
  // criando 2 funções
  const inc = () => {
    setNumero(numero + passo)
  }
  const dec = () => {
    setNumero(numero - passo)
  }

return (
  <>
    <Text style={Estilo.fonteGrande}> {numero} </Text>
    <Button title="Soma" onPress={inc}/>
    <Button title="Subtrai" onPress={dec}/>
  </>
)
}