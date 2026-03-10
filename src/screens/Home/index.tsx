import { StatusBar } from "expo-status-bar";
import { Image, Linking, Platform, Text, View } from "react-native";
import { styles } from "./styles";
import { Button } from "@/components/Button";
import { LinearGradient } from "expo-linear-gradient";



export default function Home() {
    function goToLink(url:string){
        let diretorio = url
        Linking.openURL(diretorio)
    }

  return (
    <LinearGradient
      colors={["#2b2b2b", "#1a1a1a", "#0f0f0f"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <StatusBar style="light" />
      <View style={styles.card}>
        <LinearGradient
          colors={["#ff4d4d", "#8b0000"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{
            padding: 3,
            borderRadius: 100,
          }}
        >
          <Image
            source={{
              uri: "https://avatars.githubusercontent.com/u/50676424?v=4",
            }}
            style={styles.image}
          />
        </LinearGradient>
        <Text style={styles.title}>CAIO SANTOS</Text>
        <Text style={styles.subTitle}>Mobile Developer</Text>

        {/* Navigations */}
        <View>
            <Button title="Github" name="github" onPress={() => goToLink("https://github.com/xCaio")}/>
            <Button title="Linkedin" name="linkedin" onPress={()=>goToLink("https://www.linkedin.com/in/ucaio/")}/>
            <Button title="Instagram" name="instagram" onPress={()=> goToLink("https://instagram.com/pdccaio")}/>
            <Button title="Specialties" name="desktop"/>
        </View>


      </View>
    </LinearGradient>
  );
}
