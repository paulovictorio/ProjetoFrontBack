import React from "react";
import { Card, TextInput, Button, Title } from "react-native-paper";
import { useState } from "react";

const DadoInserir=({ cadastroSucedido })=>{
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState("");
    const [cidade, setCidade] = useState("");

    const addUser = ()=>{
        fetch('http://10.68.153.209:3000/add/',{
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
        <Card style={{ margin:10, padding:15 }}>
          <Card.Content>
            <Title>Inserir Um Novo Usuário</Title>

            <TextInput
                label="Nome"
                value={nome}
                onChangeText={setNome}
                mode="outlined"
                style={{ marginBottom: 10 }}
            />

            <TextInput 
                label="Idade"
                value={idade}
                onChangeText={setIdade}
                mode="outlined"
                style={{ marginBottom: 10 }}
                keyboardType="numeric"
            />

            <TextInput 
                label="Cidade"
                value={cidade}
                onChangeText={setCidade}
                mode="outlined"
                style={{ marginBottom: 10 }}
            />
            <Button mode="contained" onPress={addUser}>
                Cadastrar
            </Button>
          </Card.Content>
        </Card>
    );
}

export default DadoInserir;
