import React, {useState} from 'react'
import FilhoComIndireta from './FilhoComIndireta'
import {Text} from 'react-native'
import Estilo from './Estilo'

export default props => {

  const [texto, setTexto] = useState('')
  const [num, setNum] = useState(0)

  function exibirTexto(numero, texto){
    setNum(numero)
    setTexto(texto)
  }

  return (
    <>
      <Text style={Estilo.fonteGrande}>
        {texto} {num}
      </Text>
      <FilhoComIndireta min={1} max={50} funcao={exibirTexto}/>   
    </>
  )
}