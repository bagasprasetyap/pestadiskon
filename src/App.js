import React, { Component } from "react";
import PromoCard from "./components/PromoCard";
import { connect } from "react-redux";
import { action } from "./store/action";

class App extends Component {
  componentDidMount = e => {
    this.props.action(this.props);
  };

  render() {
    const { promos } = this.props;
    // console.log(this.props);

    return (
      <div className="container">
        <h4 className="red-text center">GET YOUR PROMO!</h4>

        <div className="row">
          <PromoCard promos={promos} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return {
    promos: state.promos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    action: promo => dispatch(action(promo))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
