import React from 'react'
import {Text, FlatList} from 'react-native'
import Estilo from '../Estilo'
import produtos from './produtos'

export default props => {

  const produtoRender = ({item: p}) => {
    return <Text> {p.id}) {p.nome} - R$ {p.preco}</Text>
  }
  
  return (
    <>
      <Text style={Estilo.fonteGrande}>
        Lista de Produtos
      </Text>
      <FlatList
        data={produtos}
        keyExtractor={ i => `${i.id}`}
        renderItem={produtoRender}>

      </FlatList>
    </>
  )
}