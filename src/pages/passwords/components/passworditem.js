import React from "react";
import {View , Text, StyleSheet, Pressable } from 'react-native'

export  function PasswordItem({data, removePassword}){
    return(
        <Pressable onLongPress={removePassword} style={styles.container}>
         <Text style={styles.text}>{data}</Text>

         
        </Pressable>
  
  
        
    )
}



const styles = StyleSheet.create({
    container:{
        backgroundColor: "#3d3d34",
        padding:14,
        width: "100%",
        marginBottom: 15,
        borderRadius:9,
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"space-between",
        
    },
    text:{
        color: "white",
        fontWeight:"bold"
    }
})