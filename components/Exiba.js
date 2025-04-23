import React from "react";
import { View, Text, FlatList, Button } from "react-native-web";
import DadoDelete from "./Delete";

const DadoExiba=(props)=>{
    return(
        <View>
            <FlatList 
                data={props.campo}
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
                        <DadoDelete id={item._id}/>
                        
                    </View>
                    )
                  }}
            />
        </View>
    )
}
export default DadoExiba;