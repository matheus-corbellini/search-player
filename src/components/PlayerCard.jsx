import React from "react";

const PlayerCard = ({ jogador }) => {
  if (!jogador) return null;

  return (
    <div className="player-card">
      <h2>{jogador.nome}</h2>
      <p>
        📌 <strong>Posição:</strong> {jogador.posicao}
      </p>
      <p>
        🎂 <strong>Idade:</strong> {jogador.idade}
      </p>
      <p>
        📏 <strong>Altura:</strong> {jogador.altura}
      </p>
      <p>
        🦶 <strong>Perna preferida:</strong> {jogador.perna_preferida}
      </p>
      <p>
        📜 <strong>Times:</strong> {jogador.times.join(", ")}
      </p>
      <p>
        ⚽ <strong>Gols:</strong> {jogador.gols}
      </p>
    </div>
  );
};

export default PlayerCard;
