import React from "react";
import { SafeAreaView, View, Text, Image, Dimensions, StyleSheet, FlatList, TouchableOpacity, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import PageTitle from "../components/PageTitle";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import {useHeaderHeight} from "@react-navigation/elements"

const{ width , height} = Dimensions.get("window");


export default function DogDetail2({ route, navigation }) {
   
    const datas  = route.params.datas;
    const tabBarHeight = useBottomTabBarHeight();
    const headerHeight = useHeaderHeight();
const heightZoneImage = ((height-tabBarHeight - headerHeight) /14)*5 - 40

    return(
        <SafeAreaView style={styles.container}>
            <PageTitle title={ datas.nom} color="#11AD58" style={{flex:1}} />
            <View style={{ flex: 5}}>
                <Image source={datas.image} style={{width: width*0.5, height: heightZoneImage }} />
            </View>
            <View style={{ flex: 8}}>
            {/* On ajoute une flatlist qui crée une liste scrollable par défaut d'après un jeu de 
            donnée */}
            <FlatList data={datas.textes} keyExtractor={item=>item.id}  renderItem= { 
            ({ item }) => {
                return (
                    <Text style= {styles.paragraphe }>{item.texte}</Text>
                    )
            }
            
            }   />
            </ View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    paragraphe:{
        fontSize: 20,
        fontFamily: "openSansRegular",
        paddingHorizontal: 10,
        textAlign: "justify",
        marginBottom:10,
    }
});
