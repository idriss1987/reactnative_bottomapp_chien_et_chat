import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import DogScreen from "../screens/DogScreen";
import DogDetail from "../screens/DogDetail";
import DogDetail2 from "../screens/DogDetail2";

const Stack = createStackNavigator();


export default function DogStack(){
    return(
        <Stack.Navigator>
        <Stack.Screen name="DogScreen" component={DogScreen} options={{ headerShown:false}} />
        <Stack.Screen name="DogDetail" component={DogDetail}  />
        <Stack.Screen name="DogDetail2" component={DogDetail2}  />
        </Stack.Navigator>
        )
}