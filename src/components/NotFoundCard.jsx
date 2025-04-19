import react from "react";

const NotFoundCard = () => {
  return (
    <div className="player-card not-found-card">
      <div className="not-found-icon">❌</div>
      <h2>Player not found</h2>
      <p>This player is not registred or is not playing at Internacional</p>
    </div>
  );
};

export default NotFoundCard;
