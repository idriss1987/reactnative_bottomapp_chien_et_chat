import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ImageBackground, Dimensions } from "react-native";
import { StatusBar } from "react-native";
// Import des assets
import background from "../../assets/images/bg-home.jpg";
// Récupération de la taille de l'écran	
const {width, height}  = Dimensions.get('window');

export default function HomeScreen({ navigation }) {
    return(
        <ImageBackground source={background} style={styles.background}>
            <SafeAreaView style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.titre}>Chiens & Chats</Text>
                    <Text style={styles.sousTitre}>Les chiens et les chats sont parmis les animaux les plus populaires</Text>
                    <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Details")}><Text style={styles.toText} >En savoir plus</Text></TouchableOpacity>
                </View>
            </SafeAreaView>
            <StatusBar backgroundColor="rgba(0,0,0,0)" translucent={true} style="dark" />
        </ImageBackground>
    );
}
// Mise en place des styles
const styles = StyleSheet.create({
    background:{
        flex: 1,
        width: width,
        
    },
    textContainer:{
        marginTop: height - 210,
        marginHorizontal:20,
    },
    titre:{
        fontSize:40,
        color:"#fff",
        fontFamily:"lily",
    },
    sousTitre:{
        fontSize: 20,
        color:"#fff",
        fontFamily:"openSansRegular",
    },
    button:{
        backgroundColor:"#fff",
        fontFamily:"openSansRegular",
        paddingVertical:5,
        paddingHorizontal:10,
        borderRadius:20,
        marginTop:5,
        alignItems:"center",
    },
    toText:{
        fontFamily:"openSansRegular",
        fontSize: 20,
    }
});
