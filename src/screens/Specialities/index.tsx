import { StatusBar } from "expo-status-bar";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import * as Progress from "react-native-progress";
import { MaterialCommunityIcons } from "@expo/vector-icons/";

export default function Specialities() {
  return (
    <LinearGradient
          colors={["#2b2b2b", "#1a1a1a", "#0f0f0f"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.background}
        >
    <View style={styles.container}>
      <StatusBar style="light" />
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
        <Text style={styles.title}>My Skills</Text>
      <View style={styles.card}>

        <View style={styles.miniCards}>
          <MaterialCommunityIcons name="react" size={55} color={"#58C4DC"} />
          <Progress.Bar progress={0.7} width={150} color="#FFF" />
        </View>
        <View style={styles.miniCards}>
          <MaterialCommunityIcons name="tailwind" size={55} color={"#00BCFF"}/>
          <Progress.Bar progress={0.8} width={150} color="#FFF" />
        </View>

        <View style={styles.miniCards}>
          <MaterialCommunityIcons name="nodejs" size={55} color={"#54A345"}/>
          <Progress.Bar progress={0.6} width={150} color="#FFF" />
        </View>
        <View style={styles.miniCards}>
          <MaterialCommunityIcons name="language-typescript" size={55} color={"#3178c6"}/>
          <Progress.Bar progress={0.5} width={150} color="#FFF" />
        </View>
      </View>
    </View>
    </LinearGradient>
  );
}
