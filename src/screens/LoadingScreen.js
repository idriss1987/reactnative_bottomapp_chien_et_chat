import React from "react";

import { SafeAreaView, Text, StyleSheet } from "react-native";

export default function LoadingScreen(){
return (
    <SafeAreaView  style={styles.container}>
        <Text style={styles.text}>Loading...</Text>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#000",
},
text:{
    color: "#fff",
    fontSize:25,
}
});