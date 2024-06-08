import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const FooterBar = () => {
  const router = useRouter();

  return (
    <View style={styles.contenedor}>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => router.push("/pages/denuncias")}>
          <FontAwesome name="home" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/pages/noticias")}>
          <FontAwesome name="search" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/pages/configurar")}>
          <FontAwesome name="gears" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FooterBar;

const styles = StyleSheet.create({
  contenedor: {
    width: "100%",
    alignItems: "center",
    height: 75,
    backgroundColor: "transparent",
    position: "absolute",
    bottom: 10,
  },
  footer: {
    height: 55,
    backgroundColor: "#3383F3",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "70%",
    borderRadius: 50,
  },
});
