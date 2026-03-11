import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    background:{
        flex: 1
    },
    container:{
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginTop: 20,
        flex: 1
    },
    card:{
        width: "90%",
        // borderWidth: 1,
        marginVertical: 20,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    miniCards:{
        width: "80%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        borderWidth: 2,
        borderColor: "#8b0000",
        gap: 10,
        borderRadius: 5,
        marginHorizontal: 4,
        marginVertical: 10,
        // backgroundColor: "#FFF",
        // elevation: 1,
    },
    image:{
        width: 200, 
        height: 200,
        borderRadius: 100,
    },
    title:{
        fontFamily: "Roboto_400Regular",   
        fontSize: 20,
        marginVertical: 5,
        color: "#FFF"
    },

})