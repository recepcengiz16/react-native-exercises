import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create({
    
    container:{
        flex: 1,
        margin:15,
        //borderRadius: 10,
    },  
    image: {
        flex: 1,
        resizeMode:"contain",
        borderRadius:25,
        borderWidth:2,
        borderColor:"white",
        overflow: 'hidden',
        //width:Dimensions.get("window").width,
        height:Dimensions.get("window").height /4,
        //width: Dimensions.get('window').width - 50,
    },
    textContainer: {
        position: 'absolute',
        bottom: 0, // Görüntünün altına yerleştir
        left: 0, // Sol kenara hizala
        right: 0, // Sağ kenara hizala
        backgroundColor: '#000000c0', // Arka plan rengi ve opaklığı
        //opacity:0.65
      },
    text: {
        color: 'white',
        fontSize: 15,
        lineHeight: 24,
        fontWeight: 'bold',
        textAlign:"right",
        marginRight:15,
      },
   
})