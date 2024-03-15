import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    image:{
        width:Dimensions.get("window").width,
        height:Dimensions.get("window").height / 3
      },
      title:{
        color:"red",
        fontSize:32,
        alignSelf:"flex-start"
      },
      area:{
        color:"red",
        fontSize:18,
        alignSelf:"flex-start"
      },
      line:{
        borderWidth:1,
        marginTop:5,
        borderColor:"gray",
        marginBottom:5
      },
      desc:{
        fontWeight:"bold"
      },
      btn:{
        backgroundColor:"red",
        margin:10,
        //width:Dimensions.get("window").width/3,
        alignSelf:"center",
        padding:10,
        borderRadius:10
      },
      btnText:{
        color:"white",
        textAlign:"center"
      }
});