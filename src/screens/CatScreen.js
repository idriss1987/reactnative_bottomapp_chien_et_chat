import React from "react";
import { Text,View, StyleSheet, SafeAreaView, Dimensions, Image, TouchableOpacity} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import PageTitle from "../components/PageTitle";
import { StatusBar } from "expo-status-bar";

const catDatas = [
    { 
        "titre": "Chats de race", 
        "image": require("../../assets/images/chat-race.jpg"),
        "description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tellus nibh, elementum vitae nisl sit amet, condimentum pulvinar ex. Nunc aliquet fermentum urna, ut varius purus sodales nec. Nunc cursus massa est, sed dictum erat bibendum nec. Integer fermentum urna purus, nec maximus enim lobortis ut. Pellentesque fringilla lectus suscipit metus pellentesque, non pulvinar nisl elementum. Aenean risus ex, porttitor vel scelerisque ut, scelerisque et risus. Nam eu nulla vel nulla eleifend tincidunt. Curabitur nibh turpis, varius et sapien ac, fringilla posuere metus. Sed sit amet venenatis orci. Vestibulum nec augue in mi suscipit rutrum.',
        imgWidth:3758,
        imgHeight:2076,
    },
    { "titre": "Chats de gouttières", 
    "image": require("../../assets/images/chat-gouttiere.jpg"),
    "description": 'Mauris in nisi lorem. Nam non magna molestie, consequat est ac, malesuada diam. Maecenas in blandit ipsum. Etiam eget consectetur risus, sit amet faucibus risus. Vivamus at odio leo. Sed metus enim, imperdiet in bibendum eget, pellentesque cursus justo. Etiam pharetra fermentum fringilla. Vivamus interdum elit nec magna sodales, id hendrerit dolor efficitur. In non cursus lorem, at consequat magna. Pellentesque quis ex non quam elementum suscipit.',
    imgWidth:275,
    imgHeight:183,
},
]

const width = Dimensions.get("window").width;


export default function CatScreen({ navigation }) {
    return(
        <SafeAreaView style={styles.container}>
            <PageTitle title="Les Chats" color="#D5A116" style= {{ flex:1}} />
            <View style={{ flex:14}}>
                <ScrollView>
                    {
                        catDatas.map((catData,index)=>
                        <TouchableOpacity key={index} style={styles.card} onPress={()=> navigation.navigate("CatDetail",{ data: catData }) } >
                            <Image source ={catData.image} style={[styles.image, {height: (width -40) * catData.imgHeight / catData.imgWidth } ]} />
                            <Text style={styles.text}>{catData.titre} </Text>
                        </TouchableOpacity>
                        )
                    }
                </ScrollView>
            </View>
            <StatusBar backgroundColor="rgba(0,0,0,0)" translucent={true} style="dark" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text:{
        fontSize: 25,
        fontFamily:"openSansItalic",
        textAlign:"center",
        color: "#fff",
    },
    card:{
        backgroundColor: "#D5A116",
        width:width -20,
        marginBottom:20,
        paddingVertical:10,
        borderRadius:10,
    },
    image:{
    width:width -40,
    marginLeft:10,
    borderRadius: 5,
    }
});