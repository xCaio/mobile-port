import Home from "@/screens/Home"
import Specialities from "@/screens/Specialities"
import { createStaticNavigation } from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"

const StackRoutes = createNativeStackNavigator({
    screens:{
        Home: {
            screen: Home,
            options:{
                headerShown: false
            }
        },
        Specialities: {
            screen: Specialities
        }
    }
})

export const Navigation = createStaticNavigation(StackRoutes)