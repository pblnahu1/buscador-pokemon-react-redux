import React from "react";
import { connect } from "react-redux";
import {
  buy_pokemon_action,
  return_pokemon_action,
} from "../redux/actions/gameShopAction";

class CompraPokemon extends React.Component {
  render() {
    return (
      <div className="row" style={{ padding: "0px 20%" }}>
        <button
          className="btn btn-dark btn-sm mb-2"
          onClick={() => {
            this.props.buy_pokemon_action(1);
          }}
        >
          Comprar Pokemon
        </button>
        <button
          className="btn btn-dark btn-sm"
          onClick={() => {
            this.props.return_pokemon_action(1);
          }}
        >
          Remover Pokemon
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = {
  buy_pokemon_action,
  return_pokemon_action,
};

export default connect(null, mapDispatchToProps)(CompraPokemon);
