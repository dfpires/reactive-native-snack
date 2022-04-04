import React from 'react'
import {View, StyleSheet} from 'react-native'

export default props => {

  return (
    <View style={{
      height: 30,
      width: 30,
      backgroundColor: props.cor || '#000'
    }} />
  )
}