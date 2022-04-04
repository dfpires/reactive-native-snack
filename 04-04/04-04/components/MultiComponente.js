import React from 'react'
import {Text} from 'react-native'
import Estilo from './Estilo'

function Multi1(){
  return <Text style={Estilo.fonteGrande}> Multi Componente 1 </Text>
}

function Multi2(){
  return <Text style={Estilo.fonteGrande}> Multi Componente 2 </Text>
}

function Multi3(){
  return <Text style={Estilo.fonteGrande}> Multi Componente 3 </Text>
}

export {Multi2, Multi3}
export default Multi1