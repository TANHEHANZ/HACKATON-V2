import React from 'react';
import { useRouter } from "expo-router";


import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

const Configurar = () => {
  const router = useRouter();
  return (
    <View>
      <Text style={styles.titulo}>
        Configuración
      </Text>

      <Text></Text>

      <View>
        <TouchableOpacity style={styles.botones} onPress={() => router.push("/pages/perfil")}>
          <Text style={{color:'#fff', textAlign: 'center', fontSize: 16,}}>Perfil</Text>
        </TouchableOpacity>

        <Text></Text>

        <TouchableOpacity  style={styles.botones} onPress={() => router.push("/pages/politicas")}>
          <Text style={{color:'#fff', textAlign: 'center', fontSize: 16,}}>Politicas de Privacidad</Text>
        </TouchableOpacity>

        <Text></Text>

        <TouchableOpacity onPress={() => router.push("/pages/registro")} style={styles.botones}>
          <Text style={{color:'#fff', textAlign: 'center', fontSize: 16,}}>Registrar a Persona desaparecida</Text>
        </TouchableOpacity>


      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  titulo:{
    padding: '7%',
    color: '#6b0ae7',
    textAlign:'center',
    fontSize: 20,
  },

  botones: {
    width: '90%',
    backgroundColor: '#6b0ae7',
    textAlign: 'center',
    left: 15,
    borderRadius: 25,
    padding: '4%',
  },
})

export default Configurar;
