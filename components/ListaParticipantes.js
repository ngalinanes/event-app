import React, { useState, useContext } from "react";
import { View, Text, TextInput, Button, StyleSheet, Switch } from "react-native";
import ListaParticipantesContext from "../contexts/lista-participantes-context";

const ListaParticipantes = (props) => {
  const listaParticipantesContext = useContext(ListaParticipantesContext);
  const [nombreNuevoParticipante, setNombreNuevoParticipante] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const mostrarParticipantes = () => {
    // para cada Participante de la lista mostramos:
    // un Switch con posicion y nombre de Participante
    return listaParticipantesContext.valor.map((participante, posicion) => {
      return (
        <View style={styles.participanteBox} key={posicion}>
            <Text>{posicion}: {participante}
              <Switch
                onValueChange={toggleSwitch}
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                value={isEnabled}
              />
            </Text>
        </View>
      );
    });
  };

  const agregar = () => {
    // creo el nuevo participante usando el valor ingresado en el input
    listaParticipantesContext.agregarParticipante(nombreNuevoParticipante);

    // limpio el input cuando ya esté creado
    setNombreNuevoParticipante("");
  };

  const eliminar = (posicion) => {
    // elimino el Participante de la posición pasada como parámetro
    listaParticipantesContext.eliminarParticipante(posicion);
  };

  return (
    <View style={styles.box}>
      <Text style={styles.title}>Participantes</Text>
      <Text>Total participantes: {listaParticipantesContext.valor.length}</Text>
      {mostrarParticipantes()}

      <Text style={styles.title}>Agregar nuevo participante</Text>
      <TextInput
        style={styles.input}
        onChangeText={setNombreNuevoParticipante}
        value={nombreNuevoParticipante}
        placeholder={"Ingrese nombre"}
      />
      <Button onPress={agregar} title="Agregar participante" color="green" />

      <Text style={styles.title}>Limpiar todos los participantes</Text>
      <Button
        onPress={listaParticipantesContext.limpiarListaParticipantes}
        title="Limpiar"
        color="silver"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#eee",
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginBottom: 10,
  },
  participanteBox: {
    borderStyle: "solid",
    padding: 5,
    margin: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    marginTop: 30,
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1,
  },
});

export default ListaParticipantes;
