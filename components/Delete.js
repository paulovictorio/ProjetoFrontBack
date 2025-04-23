import React from "react";
import { View, Pressable, Text } from "react-native-web";

const DadoDelete=(props)=>{
    const Delete = (id)=>{
        fetch(`http://10.68.153.74:3000/delete/${id}`,{
          method:'DELETE',})
          .then((res)=> res.json())
          .then((json)=> console.log(json))
    }
    return(
        <View style={{border:'1px solid black', 
                    margin:5,
                    padding:20,
                    padding:4,
                    width:'30%'
                    }}>
            <Pressable onPress={()=>{Delete(props.id)}}>
                <Text>Excluir</Text>
            </Pressable>
        </View>
    );


}
export default DadoDelete; 