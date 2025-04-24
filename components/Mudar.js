import React, { useState } from "react";
import { View, TextInput, Pressable } from "react-native";

const DadoEditar = ({ item, onSave, onCancel }) => {
    const [novoNome, setNome] = useState(item.name);
    const [novoIdade, setIdade] = useState(item.age);
    const [novoCidade, setCidade] = useState(item.city);

    const handleSalvar = () => {
        onSave(item._id, setNome, setIdade, setCidade);
    };

    return(
        <View>
            <View style={{
                margin:20,
                backgroundColor:"#00FFFF",
                padding:5,
                border:'1px solid #ddd'
            }}>
                
                <TextInput 
                    value={novoNome}
                    onChangeText={setNome}
                    placeholder="Editar Nome"    
                />
                <TextInput 
                    value={novoIdade}
                    onChangeText={setIdade}
                    placeholder="Editar Idade"    
                />
                <TextInput 
                    value={novoCidade}
                    onChangeText={setCidade}
                    placeholder="Editar Cidade"    
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Pressable title="Salvar" onPress={handleSalvar} />
                    <Pressable title="Cancelar" onPress={onCancel} />
                </View>
                
            </View>
        </View>
    );
};

export default DadoEditar;