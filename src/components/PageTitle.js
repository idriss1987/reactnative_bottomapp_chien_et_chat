import React from "react";
import { View, Text, StyleSheet} from "react-native";
import Constants from "expo-constants";

export default function  PageTitle (props) {
const {title,color} = props;
    return(
        <View style={styles.container}>
            <Text style={[styles.title, {color: color}]}> {title}</Text>
        </View>
        );
}
// mise en place des styles 
const styles = StyleSheet.create({
    container:{
        paddingTop: Constants.statusBarHeight,
        flex:1,
        alignItems:"center",
    },
    title:{
        fontSize:30,
        fontFamily: "lily",
    }
})