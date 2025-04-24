import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TextInput } from "react-native-web";
import DadoDelete from "./Delete";

const DadoExiba=(props)=>{
    
    const [dados, setDados] = useState(props.campo);

    useEffect(() => {
        setDados(props.campo);
    }, [props.campo]);

    const handleDelete = (deleteId) => {
        setDados(dados.filter(item => item._id !== deleteId));
    }
    return(
        <View>
            <FlatList 
                data={dados}
                  renderItem={({item})=>{
                    return(
                    <View style={{
                        margin:20,
                        backgroundColor:"#00FFFF",
                        padding:5,
                        border:'1px solid #ddd'
                    }}>
                        
                        <Text> id: {item._id}</Text>
                        <Text> nome: {item.name}</Text>
                        <Text> idade: {item.age}</Text>
                        <Text> cidade: {item.city}</Text>
                        <DadoDelete id={item._id} onDelete={handleDelete} />
                        
                    </View>
                    )
                  }}
                  keyExtractor={item => item._id}
            />
        </View>
    )
}
export default DadoExiba;