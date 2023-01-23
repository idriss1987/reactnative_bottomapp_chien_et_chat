import React from "react";
import { Text,View, StyleSheet, SafeAreaView, Dimensions, Image, TouchableOpacity , ScrollView} from "react-native";
import PageTitle from "../components/PageTitle";
import { StatusBar } from "expo-status-bar";
// 
const width = Dimensions.get("window").width;
// 
const datas = [
    {
        id: 1,
        titre: "Les gros chiens",
        image: require("../../assets/images/gros-chien.webp"),
        imgWidth:1200,
        imgHeight:600,
        description: 'Avec 349 races dans le monde, la morphologie des chiens peut être très différente. Ces races sont réparties en 10 groupes, mais seul le groupe 2 des molossoïdes et le groupes 10  des lévriers comptent parmi leurs effectifs les races les plus grosses et imposantes au monde.',
        liste:[
            {
                id: 1,
                nom: "Le Mastiff, le plus gros",
                image: require("../../assets/images/english_mastiff_480x480.webp"),
                textes: [
                    {
                        id: 1,
                        texte: "Ce molosse est indéniablement le plus lourd des chiens, avec un poids pouvant atteindre les 100kg pour une taille de 70 à 86 cm. Avec ce gabarit, le Mastiff aura besoin de plus d’1kg de nourriture par jour, soit un besoin mensuel de 60kg de croquettes ! "
                    },
                    {
                        id: 2,
                        texte: "Utilisé autrefois comme chien de combat et de chasse, il a gardé de bonnes aptitudes à la dissuasion. Malgré sa stature très imposante, ce grand sensible est un excellent compagnon de vie. Sociable et calme, il est facile à vivre et se montre délicat et joueur avec les enfants."
                    },
                    {
                        id: 3,
                        texte: "Plutôt sédentaire, il peut étonnamment s’adapter à une vie en appartement, pourvue que celui-ci soit suffisamment grand pour accueillir son imposant gabarit. "
                    }
                ]
            },
            {
                id: 2,
                nom: "Le dogue allemand, l’Apollon des chiens ",
                image: require("../../assets/images/danois_chien-min_480x480.webp"),
                textes: [
                    {
                        id: 1,
                        texte: "Le dogue allemand est un géant, considéré comme le plus grand chien au monde, avec une taille compris entre 71 et 86 cm. Leur poids peut atteindre 90kg pour les mâles les plus imposants. "
                    },
                    {
                        id: 2,
                        texte:"C’est un géant dissuasif de par sa taille et ses aboiements forts et puissants, mais pourtant doté d’une très grande sensibilité. Il est très attaché à sa famille et son caractère patient et protecteur en fait un excellent chien de compagnie, notamment pour les enfants."
                    },
                    {
                        id: 3,
                        texte:"Détestant la solitude, ce doux géant s’adaptera parfaitement à une vie en intérieur, pourvu qu’une grosse balade lui soit proposé chaque jour."
                    },
                    {
                        id: 4,
                        texte:"Vous pouvez en rencontrer de 5 couleurs différentes : Fauve (roux) à masque noir, bringé à masque noir, bleu (visuellement gris), noir et arlequin (blanc taché de noir). "
                    }, 
                ]
            },
            {
                id: 3,
                nom: "Le Saint-Bernard, le baby-sitter canin ",
                image: require("../../assets/images/saint_bernard_chien_480x480.webp"),
                textes: [
                    {
                        id: 1,
                        texte: "Ce gros nounours d’environ 70 cm pour 80 kg est originaire des Alpes suisses, où il était utilisé comme chien de garde. Mis en avant dans les films Beethoven, le Saint-bernard est un molosse aux allures de peluche qui se distingue par ses nombreuses qualités. "
                    },
                    {
                        id: 2,
                        texte:"Décontracté, affectueux et attachant, il est un excellent chien de famille. Il peut se montrer loyal et protecteur et peut être utilisé comme chien de garde. Une vie en maison avec jardin est essentiel à son épanouissement, car bien que calme en intérieur, le Saint-bernard se révèle très vif à l’extérieur. "
                    },
                    {
                        id: 3,
                        texte:"Les Saint-Bernards à poil long sont les plus répandus, mais il existe une variété à poil court ! Bien que plus rare aujourd’hui, c’était le pelage préféré des moinse de l’hospice Saint Bernard, d’où la race est originaire. En revanche, seul une couleur est autorisé : rouge  (visuellement marron) et blanc."
                    },
                ]
            }
        ]
    }
]


export default function DogScreen(props) {
    const { navigation } = props;
    return(
        <SafeAreaView style={styles.container}>
            <PageTitle title="Les Chiens" color="#11AD58" style= {{ flex:1}} />
            <View style={{ flex:14}}>
                <ScrollView>
                   {datas.map((data)=>(
                    <TouchableOpacity key={data.id} onPress={()=> navigation.navigate("DogDetail", {datas: data})}>
                        <Text style={styles.titre} > {data.titre}</Text>
                        <Image  source={data.image} style={[styles.image, { height:(width-40) * data.imgHeight / data.imgWidth}] }  />
                    </TouchableOpacity>
                    ))
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
    image:{
    width:width - 40 ,
    marginHorizontal: 20 ,
    marginBottom: 10,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10, 
    },
    titre:{
    fontSize:30,
    textAlign:"center",
    backgroundColor:"#11AD58",
    color:"white",
    paddingVertical:5,
    marginHorizontal:20,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    fontFamily:"openSansRegular",
    }
});