import React, { Component } from "react";
import { Container, Message } from "semantic-ui-react";
import connect from "react-redux/es/connect/connect";
import Paycheck from "../forms/paycheck/Paycheck";

class AddPaycheck extends Component {
  render() {
    const { paychecks } = this.props.paychecks.paychecks;

    return (
      <Container>
        {paychecks.length ? (
          ""
        ) : (
          <Message warning header="Enter your first paycheck to get started!" />
        )}
        <Paycheck />
      </Container>
    );
  }
}

function mapStateToProps({ paychecks }) {
  return { paychecks };
}

export default connect(mapStateToProps)(AddPaycheck);