import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Button from './components/Button'
import Display from './components/Display'

const initialState = {
  displayValue: '0', // valor mostrado
  clearDisplay: false, // false (não precisa limpar display, true precisa limpar display)
  operation: null, // tipo de operação
  values: [0, 0],
  current: 0 // índice do vetor values, que pode ser 0 ou 1
}

export default class App extends Component {

  state = {...initialState}

  // adiciona dígito no display
  addDigit = n => {

    // limpa a tela toda vez que um zero for adicionado
    const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay

    // não deixa adicionar um novo ponto - já já existe um ponto
    if (n === '.' && !clearDisplay && this.state.displayValue.includes('.')) {
      return // não adiciona nada
    }

    const currentValue = clearDisplay ? '' : this.state.displayValue
    const displayValue = currentValue + n
    // atualiza conteúdo da variável
    this.setState({displayValue, clearDisplay: false})

    if ( n !== '.' ){ // atualiza vetor values
      const newValue = parseFloat(displayValue)
      const values = [...this.state.values]
      values[this.state.current] = newValue
      this.setState({values})
    }

  }
  // quando clica no AC
  clearMemory = () => {
    this.setState({...initialState}) // começa tudo novamente
  }
  
  // define a operação que será realizada 
  setOperation = operation => {
    if (this.state.current === 0){
      this.setState({operation, current: 1, clearDisplay: true})
    }
    else {
      const equals = operation === '='
      const values = [...this.state.values]
      try {
        values[0] = eval(`${values[0]} ${this.state.operation} ${values[1]}`)
      }
      catch(e){
        values[0] = this.state.values[0]
      }
    
      values[1] = 0

      this.setState({
        displayValue: `${values[0]}`,
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: true,
        values,
      })
    }
  } 

  
  render() {
    return (
    <View style={styles.container}>
      <Display value={this.state.displayValue}/>
      <View style={styles.buttons}>
        <Button label='AC' triple onClick={this.clearMemory}/>
        <Button label='/' operation onClick={this.setOperation}/>
        <Button label='7' onClick={this.addDigit}/>
        <Button label='8' onClick={this.addDigit}/>
        <Button label='9' onClick={this.addDigit}/>
        <Button label='*' operation onClick={this.setOperation}/>
        <Button label='4' onClick={this.addDigit}/>
        <Button label='5' onClick={this.addDigit}/>
        <Button label='6' onClick={this.addDigit}/>
        <Button label='-' operation onClick={this.setOperation}/>
        <Button label='1' onClick={this.addDigit} />
        <Button label='2' onClick={this.addDigit} />
        <Button label='3' onClick={this.addDigit}/>
        <Button label='+' operation onClick={this.setOperation}/>
        <Button label='0' double onClick={this.addDigit}/>
        <Button label='.' onClick={this.addDigit}/>
        <Button label='=' onClick={this.setOperation}/>
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});
