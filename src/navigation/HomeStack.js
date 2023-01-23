import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import des ecrans de la pile 
import HomeScreen from "../screens/HomeScreen";
import HomeDetailScreen from "../screens/HomeDetailScreen";
//instanciation de la stack 
const Stack = createStackNavigator();

export default function HomeStack(){
    return(
        <Stack.Navigator screenOptions={{gestureEnabled:true}}>
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
            <Stack.Screen name="Details" component={HomeDetailScreen} options={{headerShown:false}}/>

        </Stack.Navigator>
        );
}