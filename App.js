 import { useState } from 'react'
 import {View,  Text, StyleSheet, Image, TouchableOpacity, Modal} from 'react-native'
 import Slider from '@react-native-community/slider'
 import { ModalPassword} from './src/componets/modal'


 let charset = "abcdefghijklmnopqrstuvxwyzABCDEFGHIJKLMNOPQRSTUVXWYZ123456789"
export default function  App (){
 const [size, setSize] = useState (10)

 const [passwordValue, setPasswordValue] = useState ("")

 const [modalVisible,  setModalVisible] = useState(false)

 function generatePassword (){
  let passWord = ''
  for (let i =  0 , n = charset.length; i < size ;  i++) {
    passWord += charset.charAt(Math.floor(Math.random() * n))
  }
 setPasswordValue(passWord)
 setModalVisible(true)


 }


  return(
  <View style={styles.container}>
  <Image
  source={require("./assets/logo.png")}
  style={styles.logo}
  />
  <Text style={styles.title}>{size} ndfjdj</Text>

  <View style={styles.area}>
  <Slider
  style={{height:50}}
  minimumValue={6}
  maximumValue={20}
  maximumTrackTintColor='blue'
  value={size}
  onValueChange={(velue) => setSize (velue.toFixed(0))}
  />

  </View>

   <TouchableOpacity style={styles.button} onPress={generatePassword}>
  <Text style={styles.buttonText}>gerar senha</Text>
   </TouchableOpacity>

   <Modal visible={modalVisible} animationType='fade' transparent={true}>
    < ModalPassword passWord={passwordValue} handleClose={( ) => setModalVisible(false)}/>
   </Modal>

   
  </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center"
  }, 
  logo:{
    margin: 60
  },
 area:{
  marginTop:14,
  marginBottom:14,
  width: "80%",
  backgroundColor: "red",
  borderRadius: 8,
  padding: 8
  },
  button:{
    backgroundColor: "blue",
    borderRadius: 40,
    width:"50%",
    textAlign:"center",
    alignItems: "center",
    padding: 5,
    marginBottom: 18
  
  },
buttonText:{
  color: "pink",
  fontSize: 20
},
  title:{
    fontSize: 20,
    fontWeight: "bold"
  }
})