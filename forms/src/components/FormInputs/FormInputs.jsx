import React from "react";

import {
  Container,
  FormInputContainer,
  FormLabel,
  FormInput,
} from "./FormInputs.elements";

const FormInputs = (props) => {
  const { label, onChange, id, ...inputprops } = props;
  return (
    <Container>
      <FormInputContainer>
        <FormLabel>{label}</FormLabel>
        <FormInput {...inputprops} onChange={onChange} />
      </FormInputContainer>
    </Container>
  );
};

export default FormInputs;
