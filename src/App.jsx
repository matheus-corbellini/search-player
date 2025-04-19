import React, { use, useState } from "react";
import SearchBar from "./components/SearchBar";
import PlayerCard from "./components/PlayerCard";
import jogadores from "./data/jogadores";
import NotFoundCard from "./components/NotFoundCard";

const App = () => {
  const [jogador, setJogador] = useState(null);
  const [erro, setErro] = useState(false);

  const buscarJogador = (nome) => {
    const resultado = jogadores.find((j) =>
      j.nome.toLowerCase().includes(nome.toLowerCase())
    );
    if (resultado) {
      setJogador(resultado);
      setErro(false);
    } else {
      setJogador(null);
      setErro(true);
    }
  };

  return (
    <div className="container">
      <img
        src="/images/inter.svg"
        alt="Escudo do Internacional"
        className="logo-inter"
      />
      <h1>Internacional - Players</h1>
      <SearchBar onSearch={buscarJogador} />
      {erro ? <NotFoundCard /> : <PlayerCard jogador={jogador} />}
    </div>
  );
};

export default App;
