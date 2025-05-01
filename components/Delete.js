import React from "react";
import { View, Text } from "react-native-web";
import { Button, Card } from "react-native-paper";

const DadoDelete=(props)=>{
    const Delete = (id)=>{
        fetch(`http://10.68.153.209:3000/delete/${id}`,{
          method:'DELETE',})
          .then((res)=> res.json())
          .then((json)=> console.log(json));
          props.onDelete(id);
    }

    return(
        <Card style={{ margin: 10, padding: 10 }}>
            <Button onPress={()=>{Delete(props.id)}}>
                <Text>Excluir</Text>
            </Button>
        </Card>
    );


}
export default DadoDelete; 