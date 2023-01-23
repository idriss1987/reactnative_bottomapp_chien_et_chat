import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView, Dimensions } from "react-native";
const width = Dimensions.get("window").width;
import { StatusBar } from "react-native";

export default function CatDetail(props) {
    const { route, navigation } = props;
    const datas = route.params.data;
    return (
        <SafeAreaView style={ styles.container}>
            <ScrollView>
                <Text style={ styles.titre}>{datas.titre}</Text>
                <Image source={datas.image} style={[styles.image, {height: (width - 40) * datas.imgHeight / datas.imgWidth}]} />
                <Text style={ styles.text }>{datas.description}</Text>
            </ScrollView>
            <StatusBar backgroundColor="rgba(0,0,0,0)" translucent={true} style="dark" />
        </SafeAreaView>
    )

}


const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    image:{
        width: width - 40,
        marginVertical: 10,
        marginHorizontal: 20,
    },
    titre:{
        fontSize: 25,
        fontFamily: "openSansRegular",
        color: "#D5A116",
        textAlign: "center",
        paddingHorizontal: 15,
    },
    text:{
        fontSize: 20,
        fontFamily: "openSansRegular",
        color: "#D5A116",
        paddingHorizontal: 15,
        textAlign: "justify",
    }
});