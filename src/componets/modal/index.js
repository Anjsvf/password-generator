import { View, Text , StyleSheet, TouchableOpacity, Pressable } from "react-native";
import * as clipboard from 'expo-clipboard'

export function ModalPassword ({passWord , handleClose}){
   
   async function handleCopypassword (){
  await clipboard.setStringAsync(passWord )
  alert("a senha foi salva com sucesso")

  handleClose();
   }
   
   return(
  <View style={styles.container}>
   <View style={styles.content}>
    <Text style={styles.title}> senhas gerada</Text>

    <Pressable style={styles.innerPassword} onLongPress={handleCopypassword}>
        <Text style={styles.text}>{passWord}</Text>
    </Pressable>

    <View style={styles.buttonArea}>
        <TouchableOpacity style={styles.button} onPress={handleClose}>
            <Text style={styles.buttonText} >voltar</Text>
        </TouchableOpacity>

        <TouchableOpacity  style={[styles.button, styles.buttonSave]}>
            <Text style={styles.buttonSaveText}>salvar d</Text>
        </TouchableOpacity>

    </View>
   </View>
  </View>
    )
}


const styles =  StyleSheet.create({
    container:{
backgroundColor: "rgba(24,24,24, 0.6)",
flex:1,
alignItems: "center",
justifyContent: "center"
 }, 
 content:{
backgroundColor: "blue",
width: "86%",
paddingTop:24,
paddingBottom:24,
alignItems: "center",
justifyContent: "center",
borderRadius:9
 },
 title:{
    fontSize:20,
    fontWeight: "bold",
    color: "white",
    marginBottom:24
 },
 innerPassword:{
    backgroundColor:"black",
    width: "90%",
    padding:14,
    paddingBottom:14,
    borderRadius: 9,


 },
 text:{
    color: "white",
    textAlign: "center"
 },
 buttonArea:{
    flexDirection: "row",
    width: "90%",
    marginTop: 8,
    alignItems: "center",
    justifyContent: "space-between"
 }, 
 button:{
    flex: 1,
    alignItems:"center",
    marginTop: 14, 
    marginBottom: 14,
    padding: 8
 },
 buttonSave:{
    backgroundColor: "red",
    borderRadius: 9,

 },
 buttonSaveText:{
    color: "white",
    fontWeight: "bold"
 }
})