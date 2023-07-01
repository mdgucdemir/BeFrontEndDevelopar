import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { increaseCounter } from "../redux/actions/counterActions";
import { connect } from "react-redux";
import { Button } from "reactstrap";

// Bu kisimda islem biraz daha karisik cunku burada bir "event" durumu var.

class IncreaseCounter extends Component {
  render() {
    return (
      <div>
        <Button
          onClick={e => {
            this.props.dispatch(increaseCounter());
          }}
        >
          1 Arttir
        </Button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { action: bindActionCreators(increaseCounter, dispatch) };
}

export default connect(mapDispatchToProps)(IncreaseCounter);
