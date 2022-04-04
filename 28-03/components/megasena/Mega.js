
import React, {Component} from "react"
import {Text, TextInput, Button } from 'react-native'
import Estilo from '../Estilo'

// a classe é um componente
export default class Mega extends Component {

   // define um estado - qtdeNumeros gerados
   state = {
     qtdeNumeros: this.props.qtdeNumeros,
     numeros: [] // vetor
   }

   // criar um método alterar estado
   // esta função precisa ser arrow function
   alterarQtdeNumeros = (qtde) =>{
     this.setState({qtdeNumeros: +qtde})
   }

   // método para gerar um número não contido
   // nums representa vetor com números já gerados
   gerarNumeroNaoContido = nums => {
     // gera aleatório número de 1 a 60
     const novo = parseInt(Math.random() * 60) + 1
     // retorna novo se ainda não tem
     // retorna recursivamente chamada da função
     return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
   }

   // gera o vetor com os números
   gerarNumeros = () => {
     const numeros = Array(this.state.qtdeNumeros)
        .fill()
        .reduce(n => [...n, this.gerarNumeroNaoContido(n)], [])
        .sort( (a, b) => a - b)
     this.setState({numeros})   // altera o vetor
   }

   render(){

     return (
        <>
          <Text style={Estilo.fonteGrande}>
              Gerador de Mega-Sena 
              {this.state.qtdeNumeros}
          </Text>
          <TextInput
            keyboardType={'numeric'}
            style={{borderBottomWidth:1}}
            placeholder="Qtde de números"
            value={this.state.qtdeNumeros}
            onChangeText={this.alterarQtdeNumeros}/>

          <Button
             title="Gerar"
             onPress={this.gerarNumeros}/>

          <Text>
             {this.state.numeros.join(',')}
          </Text> 
        </>

     )
   }
}