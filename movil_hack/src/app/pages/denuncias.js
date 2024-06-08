import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const Denuncias = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          // source={require("../../../assets/perfil.jpg")}
          style={styles.image}
        />
      </View>
      <View>
        <Text>Persona Desaparecida </Text>
        <Text>Ubicacion ultimo visto</Text>
        <Text>Fecha</Text>
        <Text>Hora</Text>
      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: "#fff" }}>Acabo de verlo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles.button, backgroundColor: "green" }}
        >
          <Text style={{ color: "#fff" }}>Seleccionar en el mapa</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ ...styles.button, backgroundColor: "red" }}>
          <Text style={{ color: "#fff" }}>Alerta de emergencia</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Denuncias;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  imageContainer: {
    width: "100%",
    height: 300,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  containerButton: {
    flexDirection: "column",
    gap: 10,
  },
  button: {
    backgroundColor: "blue",
    padding: 15,
    borderRadius: 12,
  },
});
