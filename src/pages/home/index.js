

import { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from "react-native";
import Slider from "@react-native-community/slider";
import {ModalPassword} from "../../components/modal";

let charset = "abcdefghijklmnopqrstuvxwyzABCDEFGHIJKLMNOPQRSTUVXWYZ0123456789";

export  function Home() {
  const [size, setSize] = useState(10);

  const [passwordValue, setPasswordValue] = useState();

  const [modalVisible, setModalVisible] = useState(false);

  function generatePassword() {
    let password = "";

    for (let i = 0, n = charset.length; i < size; i++) {
      password += charset.charAt(Math.floor(Math.random() * n));
    }

    setPasswordValue(password);
    setModalVisible(true);
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/mylogo.png")}
        style={styles.logo}
      />

      <Text style={styles.title}>{size} caracteres</Text>

      <View style={styles.area}>
        <Slider
          style={{ height: 50 }}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor="#3d3d34"
          minimumTrackTintColor="#801245"
          thumbTintColor="#dcdbaf"
          value={size}
          onValueChange={(value) => setSize(value.toFixed(0))}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>
      
     <Modal visible={modalVisible} animationType="fade" transparent={true}>
      <ModalPassword password={passwordValue} handleClose={() => setModalVisible(false)} />
     </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 34,
    backgroundColor: "#dcdbaf",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    marginBottom: 60,
  },
  area: {
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    backgroundColor: "#f4f4dd",
    borderRadius: 8,
    padding: 8,
  },
  button: {
    backgroundColor: "#3d3d34",
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginBottom: 18,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color:"#3d3d34"
  },
});
