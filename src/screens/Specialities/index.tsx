import { StatusBar } from "expo-status-bar";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";

export default function Specialities() {
  return (
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
          <View style={styles.card}>
            <Text style={styles.title}>My Skills</Text>
          </View>
    </View>
  );
}
