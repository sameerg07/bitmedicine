import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
  return (
    <Menu style={{ marginTop: '10px' }}>
      <Link route="/">
        <a className="item">Alacrity</a>
      </Link>

      <Menu.Menu position="right">
        <Link route="/">
          <a className="item">Patients</a>
        </Link>

        <Link route="/patients/new">
          <a className="item">+</a>
        </Link>
      </Menu.Menu>
    </Menu>
  );
};
