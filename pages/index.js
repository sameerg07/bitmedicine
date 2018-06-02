import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import { Link } from '../routes';

class PatientIndex extends Component {
  static async getInitialProps() {
    const patients = await factory.methods.getDeployedPatients().call();

    return { patients };
  }

  renderPatients() {
    const items = this.props.patients.map(address => {
      return {
        header: address,
        description: (
          <Link route={`/patients/${address}`}>
            <a>View Patient</a>
          </Link>
        ),
        fluid: true
      };
    });

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <div>
          <h3>Patients</h3>

          <Link route="/patients/new">
            <a>
              <Button
                floated="right"
                content="Add Patient"
                icon="add circle"
                primary
              />
            </a>
          </Link>

          {this.renderPatients()}
        </div>
      </Layout>
    );
  }
}

export default PatientIndex;
