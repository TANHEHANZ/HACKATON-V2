import React from 'react';

import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

const Configurar = () => {
  return (
    <View>
      <Text style={styles.titulo}>
        Configuración
      </Text>

      <Text></Text>

      <View>
        <TouchableOpacity style={styles.botones}>
          <Text style={{color:'#fff', textAlign: 'center', fontSize: 16,}}>Perfil</Text>
        </TouchableOpacity>

        <Text></Text>

        <TouchableOpacity style={styles.botones}>
          <Text style={{color:'#fff', textAlign: 'center', fontSize: 16,}}>Politicas de Privacidad</Text>
        </TouchableOpacity>


      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  titulo:{
    padding: '7%',
    color: '#3383F3',
    textAlign:'center',
    fontSize: 20,
  },

  botones: {
    width: '90%',
    backgroundColor: '#3383F3',
    textAlign: 'center',
    left: 15,
    borderRadius: 25,
    padding: '4%',
  },
})

export default Configurar;
