import React, { Component } from 'react';
import { Card, Grid, Button } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Patient from '../../ethereum/patient';
import web3 from '../../ethereum/web3';
import { Link } from '../../routes';

class PatientShow extends Component {
  static async getInitialProps(props) {
    const patient = Patient(props.query.address);

    const summary = await patient.methods.getName().call();

    return {
      address: props.query.address,
      patientName: summary
    };
  }

  renderCards() {
    const {patientName} = this.props;

    const items = [
      {
        header: patientName,
        meta: 'Name of the Patient',
        style: { overflowWrap: 'break-word' }
      }
    ];

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <h3>Patients Show</h3>
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>{this.renderCards()}</Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Link route={`/patients/${this.props.address}/requests`}>
                <a>
                  <Button primary>View Requests</Button>
                </a>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    );
  }
}

export default PatientShow;
