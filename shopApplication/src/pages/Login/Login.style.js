import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"lightblue"
    },
    logo:{
        width:Dimensions.get("window").width,
        height:Dimensions.get("window").height / 3,
        resizeMode:"contain",
        alignSelf:"center",
        //tintColor:"white",
        //backgroundColor:"white"
    },
    logo_container:{
        flex:1,
        justifyContent:"center"
    },
    body_container:{
        flex:1
    },
    input:{
        padding:8,
        margin:10,
        borderRadius:5,
        backgroundColor:"#e0e0e0"
    },
    btn_title:{
        fontWeight:"bold",
        fontSize:17,
        color:"white"
    }
})