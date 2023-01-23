import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function CustomHeader(props) {
    const { title, color, icon , titleColor } = props; 
    return (
        <View style={[styles.container]} >
            <Image source ={icon} style={styles.icon}/>
            <Text style={[styles.title , {color: titleColor}]} >{title}</Text>
        </View>
        )
}

const styles = StyleSheet.create({
    container:{
    flexDirection:"row",
    alignItems:"center",
    flex:1,
    },
    icon:{
    width:50,
    height:50,
    },
    title:{
    fontSize:35,
    fontFamily:"lily",
    }
});