import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState, useEffect } from 'react';
import DadoExiba from './components/Exiba';
import DadoInserir from './components/Inserir';

export default function App() {
  // sera utilizada para armazenar os dados
  const[campos, setCampos] = useState([]);

  // renderizar
  useEffect(()=>{
    fetch('http://10.68.153.74:3000', {
    }).then(
      (resp)=>{return resp.json()}
    ).then(
      (json)=>{console.log(json);
        setCampos(json);
    })
  },[]);


  const addUser = ()=>{
    fetch('http://10.68.153.74:3000/add/',{
      method: 'POST',
      body:JSON.stringify({
        name: 'Isaac'
    }),
      headers:{
        'Content-Type': 'application/json; charset=utf-8'
      }
      
    }).then(
      (resp)=>{resp.json}
    ).then((data) => {
      console.log("Success:", data)
    }
    )
  }


  const Exibir = async ()=>{
    fetch('http://10.68.153.74:3000', {
    }).then(
      (resp)=>{return resp.json()}
    ).then(
      (json)=>{console.log(json)}
    )
  }

  const Atualizar0=(id)=>{
    fetch(`http://10.68.153.74:3000/update/${id}`,{
      method:'PUT',
      body: JSON.stringify({
        name:'Paulo'
      }),
      headers:{
        'Content-type': 'application/json; charset=UTF-8'
      }
    }).then(
      (resp)=> resp.json()
    ).then(
      (json)=> console.log(json))
  }

  //delete
  const Delete = (id)=>{
    fetch(`http://10.68.153.74:3000/delete/${id}`,{
      method:'DELETE',})
      .then((res)=> res.json())
      .then((json)=> console.log(json))
  }


  return (
    <View style={styles.container}>
      <Button
        title='Exibir'
        onPress={() => { Exibir() }} 
      />
      <Button
        title='Add User'
        onPress={() => { addUser() }} 
      />

      <Button
        title='PUT'
        onPress={() => { Atualizar0("67f7138d40c0369f9bb4b242") }} 
      />

      <Button
        title='DELETE'
        onPress={() => { Delete("67f7153240c0369f9bb4b246") }} 
      />

      <DadoInserir />
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
