import React from "react";
import { Text } from "react-native";
// On importe le composant createBottomTabNavigator
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// On importe les écrans de la tab
import HomeStack from "./HomeStack";
import CatStack from "./CatStack";
import DogStack from "./DogStack";
// On importe les librairies d'icones que l'on souhaite utiliser
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
// Instanciation de la tabBar
const Tab = createBottomTabNavigator();

// On exporte la tabBar
export default function TabNavigator() {
    return(
        <Tab.Navigator screenOptions={
            ({ route }) => ({
                // On définit les options de chaque Tab de la tabbar (icone, blibliotheque, couleur)
                tabBarIcon: ({ focused, color, size }) => {
                    // On déclare une variable pour la bibliothèque d'icone et une pour le nom de l'icone
                    let IconLibrary;
                    let iconName;
                    // On vérifie le nom de la route
                    if(route.name === "HomeStack"){
                        iconName = "home";
                        IconLibrary = Entypo;
                        color = focused ? "#AE5EEC" : "#333";
                    }else if(route.name === "CatStack"){
                        iconName = "cat";
                        IconLibrary = FontAwesome5;
                        color = focused ? "#D5A116" : "#333";
                    }else if(route.name === "DogStack"){
                        iconName = "dog";
                        IconLibrary = FontAwesome5;
                        color = focused ? "#11AD58" : "#333";
                    }
                    // On retourne l'icone
                    return <IconLibrary name={iconName} size={size} color={color} />
                },
                // On définit la couleur du label
                tabBarLabel: ({ focused, color })=>{
                    let label;
                    if(route.name === "HomeStack"){
                        color = focused ? "#AE5EEC" : "#333";
                        label = "Accueil";
                    }else if(route.name === "CatStack"){
                        color = focused ? "#D5A116" : "#333";
                        label = "Chats";
                    }else if(route.name === "DogStack"){
                        color = focused ? "#11AD58" : "#333";
                        label = "Chiens";
                    }
                    return <Text style={{color: color}}>{label}</Text>
                },
                // On définit la couleur de la tabbar
                tabBarStyle:{
                    backgroundColor: "#090908",
                },
                headerShown: false,
            })
        }>
            <Tab.Screen name="HomeStack" component={HomeStack} />
            <Tab.Screen name="CatStack" component={CatStack} />
            <Tab.Screen name="DogStack" component={DogStack} />
        </Tab.Navigator>
    );
}