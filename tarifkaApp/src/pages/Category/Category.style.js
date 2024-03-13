import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:"white",
        margin:12,
        
        borderTopLeftRadius:30,
        borderBottomLeftRadius:30
    },
    text:{
        fontSize:15,
        marginLeft:10,     
    },
    img:{
        height:70,
        width:70,
        resizeMode:"contain",
        marginLeft:10
    }
});