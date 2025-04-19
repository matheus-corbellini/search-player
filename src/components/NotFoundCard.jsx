import react from "react";

const NotFoundCard = () => {
  return (
    <div className="player-card not-found-card">
      <div className="not-found-icon">❌</div>
      <h2>Jogador não encontrado</h2>
      <p>Este jogador nao esta registrado ou joga por outro clube.</p>
    </div>
  );
};

export default NotFoundCard;
