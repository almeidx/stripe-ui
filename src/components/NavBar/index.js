import React from 'react';

import { Products, Developers, Company } from '../Content';
import { DropdownProvider, DropdownOption, DropdownRoot } from '../Dropdown';
import { Container, DropdownStyles } from './styles';

const NavBar = () => {
  return (
    <DropdownProvider>
      <DropdownStyles>
        <Container>
          <ul>
            <li>
              <DropdownOption name="Products" content={Products} backgroundHeight={286} />
            </li>
            <li>
              <DropdownOption name="Developers" content={Developers} backgroundHeight={167} />
            </li>
            <li>
              <DropdownOption name="Company" content={Company} backgroundHeight={215} />
            </li>
          </ul>
        </Container>

        <DropdownRoot />
      </DropdownStyles>
    </DropdownProvider>
  );
}

export default NavBar;
