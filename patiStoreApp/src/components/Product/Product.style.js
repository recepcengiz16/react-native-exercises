import { StyleSheet } from "react-native";

export default StyleSheet.create({
    inner_container:{
        flex: 1,
        margin: 5,
        justifyContent:"center",
        alignItems:"center",
        borderRadius: 10,
        padding: 10,
        backgroundColor:"white"
      },
      image: {
        width: 100,
        height: 150,
        resizeMode: 'cover',
        marginBottom: 10,
        alignItems:"center"
      },
      title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      price: {
        fontSize: 14,
        marginBottom: 5,
      },
      
})