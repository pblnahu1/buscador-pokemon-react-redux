import React from "react";
import { useDispatch } from "react-redux";
import {
  buy_pokemon_action,
  return_pokemon_action,
} from "../redux/actions/gameShopAction";

const CompraPokemonHook = () => {
  const dispatch = useDispatch();

  return (
    <div className="row" style={{ padding: "0px 20%" }}>
      <button
        className="btn btn-dark btn-sm mb-2"
        onClick={() => {
          dispatch(buy_pokemon_action(1));
        }}
      >
        Comprar Pokemon
      </button>
      <button
        className="btn btn-dark btn-sm"
        onClick={() => {
          dispatch(return_pokemon_action(1));
        }}
      >
        Remover Pokemon
      </button>
    </div>
  );
};

export default CompraPokemonHook;
