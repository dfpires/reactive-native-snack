import React from 'react'
import {Text} from 'react-native'
import Estilo from '../Estilo'
import produtos from './produtos'

export default props => {

  // cria a função obterLista
  function obterLista(){
    // percorre e retorna a lista
    return produtos.map( p => {
      // retorna cada elemento da lista
      return (
        <Text key={p.id}>
          {p.id}) {p.nome} tem preço R$ {p.preco}
        </Text>
      )
    })
  }
  // retorna a lista de produtos
  return (
    <> 
      <Text style={Estilo.fonteGrande}>
        Lista de produtos
      </Text>
      {obterLista()}
    </>
  )
}