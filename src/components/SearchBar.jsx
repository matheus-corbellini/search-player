import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [nome, setNome] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(nome);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        placeholder="Digite o nome do jogador"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default SearchBar;
