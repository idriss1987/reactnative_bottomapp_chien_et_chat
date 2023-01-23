import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import HomeScreen from './src/screens/HomeScreen';

import { useFonts } from 'expo-font';
import LoadingScreen from './src/screens/LoadingScreen';
// on importe le navigationcontainer qui doit etre unique dans toute l'appli
import { NavigationContainer } from '@react-navigation/native';
// import HomeStack from './src/navigation/HomeStack';
import TabNavigator from './src/navigation/TabNavigator';

export default function App() {
  // console.log("coucou");
  let [fontsLoaded] = useFonts({
  "lily": require("./assets/fonts/LilyScriptOne-Regular.ttf"),
  "openSansItalic": require("./assets/fonts/OpenSans-Italic.ttf"),
  "openSansRegular": require("./assets/fonts/OpenSans-Regular.ttf")
  });
  if(!fontsLoaded) return <LoadingScreen />
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>

    
  );
}


