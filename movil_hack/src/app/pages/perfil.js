import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

const Perfil = () => {
    return (
        <View>

            <Text style={{ color: "#6b0ae7", textAlign: "center", fontSize: 20, padding: "8%" }}>
                Perfil</Text>

            <View style={styles.contenido}>
                <Text style={styles.nomInput}>Nombre</Text>
                <TextInput style={styles.input}>Luciano</TextInput>

                <Text style={styles.nomInput}>Apellido</Text>
                <TextInput style={styles.input}>Perez</TextInput>

                <Text style={styles.nomInput}>Numero CI</Text>
                <TextInput style={styles.input}>9364975</TextInput>

                <Text></Text>
                <TouchableOpacity style={styles.boton}>
                    <Text style={{ color: "#fff", textAlign: "center", fontSize: 16, }}>Editar Perfil</Text>
                </TouchableOpacity>
                <Text></Text>

                <TouchableOpacity style={styles.boton}>
                    <Text style={{ color: "#fff", textAlign: "center", fontSize: 16 }}>Guardar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contenido: {
        height: "80%",
        backgroundColor: "#ccc",
        borderRadius: 25,
        width: "95%",
        left: 8,
        justifyContent: "center",
    },
    input: {
        backgroundColor: "#fff",
        borderRadius: 25,
        width: "95%",
        left: 8,
        padding: "2%",
    },
    nomInput: {
        textAlign: "center",
        color: "#6b0ae7",
        padding: "3%",
        fontSize: 16,
    },
    boton: {
        backgroundColor: "#6b0ae7",
        padding: "4%",
        borderRadius: 25,
        width: "95%",
        left: 8,
    }
})

export default Perfil;
