import React from "react";

import {
  Container,
  FormInputContainer,
  FormLabel,
  FormInput,
} from "./Navbar.elements";

const Navbar = (props) => {
  return (
    <Container>
      <FormInputContainer>
        <FormLabel>Username</FormLabel>
        <FormInput
          placeholder={props.placeholder}
          onChange={(e) => props.setUsername(e.target.value)}
        />
      </FormInputContainer>
    </Container>
  );
};

export default Navbar;
