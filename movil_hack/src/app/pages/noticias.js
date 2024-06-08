import React from 'react';
import { FontAwesome } from "@expo/vector-icons";

import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, } from 'react-native';


const Noticias = () => {
  return (
  
    <View>

      <Text></Text>
      <Text style={styles.titulo}>Buscar</Text>



      <TextInput style={styles.input}>
        <FontAwesome name="search" size={18} color="#6b0ae7" />
      </TextInput>

      <Text></Text>

      <View style={styles.container}>

        <View style={{backgroundColor:"#fff", 
                      borderRadius:25, 
                      height: "20%", 
                      justifyContent: "center",}}>
          <Text style={{ textAlign:"center", padding:"5%"}}>Persona desaparecida</Text>
          <Image source={require("../../../assets/icono_perfil.png")} style={styles.image}/>

          <TouchableOpacity style={styles.botones}>
            <Text style={{ textAlign: "center", color: "white" }}>Ingresar</Text>
          </TouchableOpacity>
        </View>


      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#ccc",
    borderRadius: 25,
    padding: "3%",
    width: "90%",
    left: 15,
  },
  titulo: {
    color: "#6b0ae7",
    textAlign: "center",
    padding: "3%",
    fontSize: 20,
  },
  container: {
    backgroundColor: "#ccc",
    width: "90%",
    left: 15,
    padding: "3%",
    borderRadius: 20,
    height: '75%',
    
  },
  botones: {
    backgroundColor: "#6b0ae7",
    left: 150,
    borderRadius: 55,
    width: "25%",
    padding: "2%",
    top: -30,
  },
  image: {
    left: 40,
  }


})

export default Noticias;
