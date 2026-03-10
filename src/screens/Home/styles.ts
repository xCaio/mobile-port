import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#000"
    },
    card:{
        justifyContent: "center",
        alignItems:"center",
        backgroundColor: "#F2F4F6",
        width: "80%",
        borderRadius: 8,
        elevation: 5,
        padding: 8
    },
    image:{
        width: 200, 
        height: 200,
        borderRadius: 100,


    },
    title:{
        fontFamily: "Roboto_400Regular",
        fontSize: 22,
        paddingVertical: 10,
        
    },
    subTitle:{
        fontSize: 15
    }
})