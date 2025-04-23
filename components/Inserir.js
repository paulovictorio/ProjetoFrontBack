import React from "react";
import { View, Text, TextInput, Button } from "react-native-web";
import { useState } from "react";

const DadoInserir=()=>{
    const [nome, setNome] = useState(null);

    const addUser = ()=>{
        fetch('http://10.68.153.74:3000/add/',{
          method: 'POST',
          body:JSON.stringify({
            name: nome
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

    return(
        <View style={{border:'1px solid black',
                     margin:3,
                     padding:6
                     }}>
            <Text>Nome</Text>
            <TextInput 
                onChangeText={(text)=>{setNome(text)}}
            />
            <Button 
                title="CADASTRAR"
                onPress={()=>{addUser()}}
            />
        </View>
    );
}

export default DadoInserir;
