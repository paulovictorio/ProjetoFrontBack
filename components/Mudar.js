import React, { useState } from "react";
import { View } from "react-native";
import { Card, TextInput, Button, Text } from "react-native-paper";

const DadoEditar = ({ name, age, city, id, onUpdate }) => {
    const [editando, setEditando] = useState(false);
    const [nome, setNome] = useState(name);
    const [idade, setIdade] = useState(age);
    const [cidade, setCidade] = useState(city);

    const handleSalvar = () => {
    fetch(`http://10.68.153.209:3000/update/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body:JSON.stringify({
        name: nome,
        age: idade,
        city: cidade
      })
    })
      .then(res => res.json())
      .then(json => {
        console.log(json);
        if (json.status === 'alterado') {
            onUpdate({ _id: id, name: nome, age: idade, city: cidade });
            setEditando(false);
        } 
      });
    };

    return(
            <Card style={{ margin: 10, padding: 10 }}>
                {editando ? (
                <View>
                    <TextInput 
                        value={nome}
                        onChangeText={setNome}
                        placeholder="Editar Nome" 
                        mode="outlined"
                        style={{ marginBottom: 10 }}   
                    />
                    <TextInput 
                        value={idade}
                        onChangeText={setIdade}
                        placeholder="Editar Idade"
                        mode="outlined"
                        style={{ marginBottom: 10 }}    
                    />
                    <TextInput 
                        value={cidade}
                        onChangeText={setCidade}
                        placeholder="Editar Cidade"  
                        mode="outlined"
                        style={{ marginBottom: 10 }}  
                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                          <Button onPress={handleSalvar} 
                          >Salvar</Button>
                          <Button onPress={() => setEditando(false)} 
                          >Cancelar</Button>
                    </View>
                </View>
                    ) : (
                        <View>
                        <Button onPress={() => setEditando(true)}>Editar</Button>
                        </View>
                    )}
            </Card>
    );
};

export default DadoEditar;