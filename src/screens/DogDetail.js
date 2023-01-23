import React from "react";
import { SafeAreaView, View, Text, Image, Dimensions, StyleSheet, FlatList, TouchableOpacity, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import PageTitle from "../components/PageTitle";
//
const width = Dimensions.get("window").width;

export default function DogDetail({ route, navigation }) {
    // On récupère les paramètres de la route (les datas)
    const datas  = route.params.datas;
    // On crée une fonction qui va créer un élément de la liste
    const renderItem = ({ item }) => {
        // console.log("item=>",item);
        return(
            <TouchableOpacity style={styles.item} key={item.id} onPress={() =>navigation.navigate("DogDetail2",{datas: item})}   >
                <Image source={ item.image } style={[styles.image, {height:width*0.15}]} />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{item.nom}</Text>
                </View>
            </TouchableOpacity>
        );
    }
    // Rendu de l'écran
    return(
        <SafeAreaView style={styles.container}>
            <PageTitle title={ datas.titre} color="#11AD58" />
            <View style={{ flex: 5}}>
                <ScrollView>
                <Text style={ styles.description }>{ datas.description }</Text>
                </ScrollView>
            </View>
            <View style={{ flex: 7}}>
            {/* On ajoute une flatlist qui crée une liste scrollable par défaut d'après un jeu de 
            donnée */}
            <FlatList data={datas.liste} renderItem={ renderItem } keyExtractor={item=>item.id} />
            </ View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    item:{
        flex: 1,
        backgroundColor: "#11AD58",
        marginBottom:10,
        flexDirection:"row",
        alignItems:"center",
        width: width -20,
        marginHorizontal: 10, 
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    description:{
        fontSize: 20,
        fontFamily: "openSansRegular",
        paddingHorizontal: 10,
        textAlign: "justify",
    },
    image:{
    width: width*0.15,
    },
    text:{
    color:"#fff",
    fontSize: 15,
    marginHorizontal: 10,
    }

})