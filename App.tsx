import Home from '@/screens/Home';
import { Roboto_200ExtraLight, Roboto_400Regular, Roboto_900Black, useFonts } from '@expo-google-fonts/roboto';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    const [fontsLoaded] = useFonts({
    Roboto_200ExtraLight,
    Roboto_400Regular,
    Roboto_900Black
  })
  if(!fontsLoaded){
    return null
  }

  return <Home/>;
}