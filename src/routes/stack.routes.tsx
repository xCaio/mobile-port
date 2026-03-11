import Home from "@/screens/Home";
import Specialities from "@/screens/Specialities";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const StackRoutes = createNativeStackNavigator({
  screens: {
    Home: {
      screen: Home,
      options: {
        headerShown: false,
      },
    },
    Specialities: {
      screen: Specialities,
      options: {
        headerTintColor: "#FFF",
        headerStyle:{
            backgroundColor: "#000"
        }

      },
    },
  },
});

export const Navigation = createStaticNavigation(StackRoutes);
