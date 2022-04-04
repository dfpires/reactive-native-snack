import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Mega from './components/megasena/Mega'

//import Quadrado from './components/layout/Quadrado'
//import FlexBoxV4 from './components/layout/FlexBoxV4'
//import Estilo from './components/Estilo'
//import UsuarioLogado from './components/UsuarioLogado'
//import ListaProdutos from './components/produtos/ListaProdutos'
//import ListaProdutosV2 from './components/produtos/ListaProdutosV2'
//import DigiteSeuNome from './components/comp-controlado/DigiteSeuNome'
//import Componente from './components/Componente'
//import Multi1, {Multi2, Multi3} from './components/MultiComponente'
//import MenorMaior from './components/MenorMaior'
//import Aleatorio from './components/Aleatorio'
//import Botao from './components/Botao'
//import Contador from './components/Contador'
//import Pai from './components/Pai'
//import PaiComIndireta from './components/PaiComIndireta'
//import ParImpar from './components/ParImpar'
//import Familia from './components/Familia'
//import Membro from './components/Membro'

export default function App() {
  return (
   /* <View style={style.container}>
      <Text style={Estilo.fonteGrande}>
        Meu primeiro programa em React Native
      </Text>
      <Componente/>
      <Multi1/>
      <Multi2/>
      <Multi3/>
      <MenorMaior maior={30} menor={10}/>
      <Aleatorio menor={10} maior={100}/>
      <Botao/>
      <Contador/>
      <Pai/>
      <PaiComIndireta/>
      <ParImpar num={32}/>
      <Familia>
        <Membro nome="Maria Fernanda" sobrenome="Pimenta"/>
        <Membro nome="Talys" sobrenome="Eugêneo"/>
    </Familia>
    <Familia>
      <Membro nome="Arthur" sobrenome="Bomfim"/>
      <Membro nome="Vinicius" sobrenome="Moraes"/>
      <Membro nome="Pitter" sobrenome="Parker"/>
    </Familia>


    </View>
    
    <View style={style.container}>
      <UsuarioLogado usuario={{nome: "Arthur", email: "arthur@gmail.com"}}/>  
      <UsuarioLogado usuario={{nome: "Vinicius"}}/>  
      <UsuarioLogado usuario={{email: "mariafernanda@gmail.com"}}/>  
      <UsuarioLogado usuario={{}}/>
      <ListaProdutos/>
      <ListaProdutosV2/>
      <DigiteSeuNome/>
      </View>
      
  /*    <View style={style.App}>
         <Quadrado />
         <Quadrado cor="#900"/>
         <Quadrado cor="#090"/>
         <Quadrado cor="#009"/> 
        
      </View> */
        <View style={style.App}>
          <Mega qtdeNumeros={6}/>
        </View>
  );
}

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  }
})

