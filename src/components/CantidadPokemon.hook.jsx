import React from "react";
import { useSelector } from "react-redux";

const CantidadPokemonHook = () => {
  const game_shop = useSelector((state) => state.game_shop);

  return (
    <div>
      <React.Fragment>Cantidad: {game_shop.pokemon}</React.Fragment>
    </div>
  );
};

export default CantidadPokemonHook;
