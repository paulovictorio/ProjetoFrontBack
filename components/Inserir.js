import React from "react";
import { View, Text, TextInput, Button } from "react-native-web";
import { useState } from "react";

const DadoInserir=({ cadastroSucedido })=>{
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState("");
    const [cidade, setCidade] = useState("");

    const addUser = ()=>{
        fetch('http://10.68.153.74:3000/add/',{
          method: 'POST',
          body:JSON.stringify({
            name: nome,
            age: idade,
            city:cidade
        }),
          headers:{
            'Content-Type': 'application/json; charset=utf-8'
          }
          
        }).then(
          (resp)=>{resp.json}
        ).then((data) => {
          console.log("Success:", data);
          if (cadastroSucedido) {
            cadastroSucedido(data);
          }
          
        }
        )
      }

    return(
        <View style={{border:'1px solid black',
                     margin:3,
                     padding:6
                     }}>
            <Text>Nome</Text>
            <TextInput 
                onChangeText={(text)=>{setNome(text)}}
            />
            <Text>Idade</Text>
            <TextInput 
                onChangeText={(text)=>{setIdade(text)}}
            />
            <Text>Cidade</Text>
            <TextInput 
                onChangeText={(text)=>{setCidade(text)}}
            />
            <Button 
                title="CADASTRAR"
                onPress={()=>{addUser()}}
            />
        </View>
    );
}

export default DadoInserir;
