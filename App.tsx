import { Navigation } from '@/routes/stack.routes';
import { Roboto_200ExtraLight, Roboto_400Regular, Roboto_900Black, useFonts } from '@expo-google-fonts/roboto';

export default function App() {
    const [fontsLoaded] = useFonts({
    Roboto_200ExtraLight,
    Roboto_400Regular,
    Roboto_900Black
  })
  if(!fontsLoaded){
    return null
  }

  return <Navigation/>
}