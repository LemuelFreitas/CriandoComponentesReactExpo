import { View, Image, Text } from 'react-native';
import { styles } from '../css/style';
import Botao from '../components/botao';
import InputTexto from '../components/inputTexto';
import { useState } from 'react';

export default function App() {
 
  return (
    <View style={styles.container}>
       <Image style={{width:'80%', height:80, marginBottom:30}}
      resizeMome="contain"
      source={require('../../assets/IMGFacebook.png')}
      />
      <InputTexto  dica="Digite seu nome"/>
      
      <InputTexto  dica="Digite sua senha" seguranca={true}/>

      <Botao btn="entrar" cor='#0000FF' src='home' cortexto ='#fff' tm='35%'/>
      <View style={styles.cont}>
        <View style={styles.line} />
          <Text style={styles.text}>ou</Text>
        <View style={styles.line} />
      </View>
      <Botao btn="cadastrar" cortexto='#000' src='cadastrar' tm='32%'/>
    </View>
  );
}

