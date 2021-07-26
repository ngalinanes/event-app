import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, Switch } from "react-native";
import { ListaParticipantesContextProvider } from "./contexts/lista-participantes-context";
import ListaParticipantes from "./components/ListaParticipantes";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Evento</Text>
      <ScrollView>
        <ListaParticipantesContextProvider>
          <ListaParticipantes />
        </ListaParticipantesContextProvider>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 80,
  },
  titulo: {
    fontSize: 32,
    fontWeight: "500",
    marginBottom: 30,
  },
});
