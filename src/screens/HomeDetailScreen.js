import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ImageBackground, Dimensions , ScrollView } from "react-native";
import { StatusBar } from "react-native";
// import des assets 
import background from "../../assets/images/bg-home-detail.webp";

// import des composants 
import PageTitle from "../components/PageTitle";

//recuperation de la taille de l'écran
const {width, height} = Dimensions.get('window');

export default function HomeDetailScreen({ navigation }){
return(
    <ImageBackground source={background} style={styles.background}>
        <SafeAreaView style={styles.container} >
    <PageTitle title="Chiens & Chats" color="#fff" style= {{flex:1 }} />
    <View style ={{flex:14}} > 
    <ScrollView style={styles.textContainer}  >
        <Text style={styles.text}>
        La cohabitation entre chiens et chats est tout à fait possible, et dépend d’abord du caractère de chacun et des conditions de leur rencontre. En général, plus tôt ils ont pu s’habituer à l’autre, si possible dès leurs premières semaines, mieux c’est. Adopter en même temps un chiot et un chaton est l’idéal : ils ne penseront qu’à jouer ensemble et s’attacheront très vite.
        </Text>
        <Text style={styles.text}>
        Si vous accueillez un nouvel animal dans une maison déjà « occupée », sachez qu’un chien adulte, animal grégaire, se fera plus facilement à un nouvel arrivant qu’un chat adulte, plus attaché à son territoire. En outre, un chien ne se sentira pas menacé par un chaton, alors qu’un chat verra sa liberté de mouvement entravée et ses habitudes chamboulées par l’arrivée d’un chiot qui court partout, surtout après lui !
        </Text>
        <Text style={styles.text}>
        Il existe quelques astuces et précautions à prendre pour préparer la première rencontre. Pensez d’abord à les nourrir juste avant, ils seront plus calmes. Vous pouvez également offrir une grande promenade à votre chien pour le faire se dépenser. Surveillez les premiers contacts mais sans intervenir, sauf si les signes d’animosité sont trop forts. Dans ce cas, séparez-les mais laissez-les se sentir, à travers le jour sous une porte par exemple, pour qu’ils s’habituent. Enfin, montrez-leur une attention équitable : ne privilégiez pas le nouvel arrivant, votre vieux compère se sentirait lésé.
        </Text>
        <Text style={styles.text}>
        Votre chat s’entendra très bien avec votre chien… tant que ce dernier lui obéit !
        </Text>
    </ScrollView>
    </View>
        </SafeAreaView>
<StatusBar backgroundColor="rgba(0,0,0,0)" translucent={true} style="dark" />
    </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background:{
        flex: 1,
        width: width,
    },
    container:{
        flex:1,
    },
    text:{
        fontSize:18,
        fontFamily:"openSansRegular",
        marginBottom:5,
        paddingHorizontal:15,
    },
    textContainer:{
        backgroundColor: "rgba(255,255,255,0.6)",
        marginHorizontal:15,
    }

});