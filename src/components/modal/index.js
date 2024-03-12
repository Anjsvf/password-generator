import { View, Text, StyleSheet, TouchableOpacity , Pressable } from "react-native";
import * as Clipboard  from 'expo-clipboard'
import useStorage from '../../hooks/useStorage'

export function ModalPassword ( {password, handleClose}){

  const {saveItem} = useStorage()

  async function handaleCopyPassword (){
   await Clipboard.setStringAsync(password)

   alert("senha salva com sucesso")

   await saveItem("@pass", password)
   handleClose()
 }

 return(
    <View style={styles.container}>
    
    <View style={styles.content}>
     <Text style={styles.title}>SENHA GERADA</Text>

      <Pressable style={styles.innerPassword} onLongPress={handaleCopyPassword}>
        <Text style={styles.text}>
          {password}
        </Text>
      </Pressable>
      <View style={styles.buttonArea}>
        <TouchableOpacity style={styles.button} onPress={handleClose}>
          <Text style={styles.buttonText}>voltar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.buttonSave]} onPress={handaleCopyPassword}>
          <Text style={styles.buttonSaveText}>Salvar senha</Text>
        </TouchableOpacity>

      </View>
    </View>

    </View>
 )
}




const styles = StyleSheet.create({
    container:{
  backgroundColor: "rgba(24,24,24, 0.6)",
  flex:1,
  alignItems:"center",
  justifyContent: "center",

    },
    content:{
        backgroundColor:"#dcdbaf",
        width: "85%",
        paddingTop:24,
        paddingBottom:24,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,

    },
    title:{
        fontSize:20,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 24
    },
    innerPassword:{
        backgroundColor:"#801245",
        width: "90%",
        padding: 14,
      borderRadius:8
    },
    text:{
      color: "white",
      textAlign: "center",

    },
    buttonArea:{
      flexDirection:"row",
      width: "90%",
      marginTop: 8,
      alignItems:"center",
      justifyContent:"space-between"

    },
    button:{
      flex: 1,
      alignItems:"center",
      marginTop: 14,
      marginBottom: 14,
      padding: 8
    },
    buttonSave:{
      backgroundColor: "#3d3d34",
      borderRadius: 8,
    },
    buttonSaveText:{
      color: "white",
      fontWeight: "bold"

    },
    buttonText:{
      color: "#5d5c49",
      fontWeight: "bold"
    }

})