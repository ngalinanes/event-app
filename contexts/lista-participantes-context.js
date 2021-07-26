import React, { useState, createContext } from "react";

// este contexto contendrá una lista de Participantes (sólo nombres), y funciones
// para modificarlos (agregar, eliminar, limpiar lista)
const ListaParticipantesContext = createContext();

export default ListaParticipantesContext;

export const ListaParticipantesContextProvider = (props) => {
  const [listaParticipantes, setListaParticipantes] = useState([
    "Juan",
    "Jose",
  ]);

  const agregarParticipante = (participante) => {
    // es necesaria una lista temporal ya que no podemos modificar
    // la lista de Participantes directamente
    const listaTemporal = [...listaParticipantes];

    // agrego el nuevo participante a la lista temporal
    listaTemporal.push(participante);

    setListaParticipantes(listaTemporal);
  };

  const eliminarParticipante = (posicion) => {
    // es necesaria una lista temporal ya que no podemos modificar
    // la lista de Participantes directamente
    const listaTemporal = [...listaParticipantes];

    // eliminamos el elemento de la posicion pasada como argumento
    listaTemporal.splice(posicion, 1);

    setListaParticipantes(listaTemporal);
  };

  const limpiarListaParticipantes = () => {
    setListaParticipantes([]);
  };

  return (
    <ListaParticipantesContext.Provider
      value={{
        valor: listaParticipantes,
        agregarParticipante: agregarParticipante,
        eliminarParticipante: eliminarParticipante,
        limpiarListaParticipantes: limpiarListaParticipantes,
      }}
    >
      {props.children}
    </ListaParticipantesContext.Provider>
  );
};
