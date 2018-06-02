import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Patient from '../ethereum/patient';

class RequestRow extends Component {
  render() {
    const { Row, Cell } = Table;
    const { id, request} = this.props;
    return (
      <Row>
        <Cell>{id}</Cell>
        <Cell>{request}</Cell>
      </Row>
    );
  }
}

export default RequestRow;
