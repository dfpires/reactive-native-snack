import React from 'react'
import {Button} from 'react-native'

export default props => {

  const mensagem = () => {
    console.info('Executado pelo primeiro botão')
  }

  return (
    <>
      <Button title="Executar método 1" onPress={mensagem}
      />
      
      <Button title="Executar método 2" onPress={function(){
        console.info('Executado pelo segundo botão')
      }}/>

      <Button title="Executar método 3" onPress={() => console.info('Executado pelo terceiro botão')}
      />
    </>
  )
}