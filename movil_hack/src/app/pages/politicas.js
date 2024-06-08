import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Politicas = () => {
    return (
        <View>
            <Text style={{ color: "#6b0ae7", textAlign: "center", fontSize: 20, padding: "8%" }}>
            Políticas y Privacidad de la Aplicación</Text>

            <View style={styles.contenido}> 
                <Text style={{textAlign: "center", color:"#fff"}}>
                    TEXTO
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contenido: {
        height: "77%",
        backgroundColor: "#ccc",
        borderRadius: 25,
        width: "95%",
        left: 8,
        justifyContent: "center",
        
    },
})

export default Politicas;
