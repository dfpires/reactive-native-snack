import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Estilo from '../Estilo'
export default ({num}) => {

  return (
    <View style={style.Container}>
      <Text style={[Estilo.fonteGrande, style.Num]}> 
        {num}      
      </Text>

    </View> 
  )
}

const style = StyleSheet.create({
  Container: {
    heigth: 50,
    width: 50,
    backgroundColor: '#000',
    margin: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25
  },
  Num: {
    color: '#FFF'
  }
})