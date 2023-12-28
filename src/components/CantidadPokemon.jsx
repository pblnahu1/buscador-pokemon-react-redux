import React from "react";
import { connect } from 'react-redux';

class CantidadPokemon extends React.Component {
  render() {
    return (
      <div>
        <React.Fragment>
          Cantidad: {this.props.game_shop.pokemon}
        </React.Fragment>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    game_shop: state.game_shop
  }
}

export default connect(mapStateToProps)(CantidadPokemon);
