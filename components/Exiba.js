import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native-web";
import { Card, Text, Title, Paragraph } from 'react-native-paper';
import DadoDelete from "./Delete";
import DadoEditar from "./Mudar";

const DadoExiba=(props)=>{
    
    const [dados, setDados] = useState(props.campo);

    useEffect(() => {
        setDados(props.campo);
    }, [props.campo]);

    const handleDelete = (deleteId) => {
        setDados(dados.filter(item => item._id !== deleteId));
    }

    const handleUpdate = (updateItem) => {
        setDados(prevDados =>
            prevDados.map(item =>
                item._id === updateItem._id ? updateItem : item
            )
        );
    }

    return(
            <ScrollView contentContainerStyle={{ padding: 10 }}>
                {dados.map((item) => (
                    <Card key={item._id} style={{ marginBottom: 15 }}>
                        <Card.Content>
                            <Title>Usuário</Title>
                            <Paragraph>ID: {item._id}</Paragraph>
                            <Text>Nome: {item.name}</Text>
                            <Text>Idade: {item.age}</Text>
                            <Text>Cidade: {item.city}</Text>
                        </Card.Content>

                        <Card.Actions style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <DadoDelete id={item._id} onDelete={handleDelete} />
                            <DadoEditar 
                                id={item._id}
                                name={item.name}
                                age={item.age}
                                city={item.city}
                                onUpdate={handleUpdate}
                            />
                        </Card.Actions>
                    </Card>
                    ))}
            </ScrollView> 
    );
};
export default DadoExiba;