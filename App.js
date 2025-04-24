import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import DadoExiba from './components/Exiba';
import DadoInserir from './components/Inserir';

export default function App() {
  // sera utilizada para armazenar os dados
  const[campos, setCampos] = useState([]);
  const[refresh, setRefresh] = useState(false);

  // renderizar
  useEffect(()=>{
    fetch('http://10.68.153.74:3000', {
    }).then(
      (resp)=>{return resp.json()}
    ).then(
      (json)=>{console.log(json);
        setCampos(json);
    })
  },[refresh]);



  handleCadastro = () => {
    setRefresh(!refresh);
  }

  return (
    <View style={styles.container}>
  
      <DadoInserir cadastroSucedido={handleCadastro} />
      <DadoExiba campo = {campos} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
