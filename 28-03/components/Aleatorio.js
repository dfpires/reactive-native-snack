import React from 'react'
import {Text} from 'react-native'
import Estilo from './Estilo'

export default ({menor, maior}) => {
  const delta = maior - menor + 1
  const aleatorio = parseInt(Math.random() * delta) + menor
  return (
    <>
      <Text style={Estilo.fonteGrande}>
        O valor aleatório é {aleatorio}
      </Text>
      <Text style={Estilo.fonteGrande}>
        reclama sim
      </Text>
    </>
  )

}