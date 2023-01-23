import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import CatScreen from "../screens/CatScreen";
import CatDetail from "../screens/CatDetail";
import CustomHeader from "../components/CustomHeader";
// import de l'icone du chat
import catIcon from "../../assets/images/Image20230119143720.png";

const Stack = createStackNavigator();

export default function CatStack() {
    return(
        <Stack.Navigator screenOptions={{ gestureEnabled:true }}>
            <Stack.Screen name="CatScreen" component={CatScreen} options={{ headerShown:false}} />
            <Stack.Screen name="CatDetail" component={CatDetail} options={{ headerStyle:{ backgroundColor:"#D5A116"}, headerTitle: () => <CustomHeader title="détail" color="#D5A116" icon={catIcon} titleColor="#fff"  />}} />
        </Stack.Navigator>
    );
}