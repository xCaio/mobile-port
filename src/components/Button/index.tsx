import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons/";

interface ButtonProps {
  title: string;
  name: any
  onPress?: () => void;
  
}

export function Button({ title, name, onPress}: ButtonProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <LinearGradient
        colors={["#ff4d4d", "#b30000"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        <AntDesign name={name} size={20} color="#F2F4F6" />
        <Text style={styles.title}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
