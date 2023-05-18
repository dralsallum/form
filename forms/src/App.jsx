import React, { useState } from "react";
import { FormInputs } from "./components";
import { FormButton } from "./components/FormInputs/FormInputs.elements";
import { Container } from "./globalStyles";

const App = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
    },
    {
      id: 2,
      name: "email",
      type: "text",
      placeholder: "Email",
      label: "Email",
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "text",
      placeholder: "password",
      label: "password",
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "text",
      placeholder: "confirmPassword",
      label: "confirmPassword",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefult();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values);
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <FormInputs
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
      </form>
      <FormButton>submit</FormButton>
    </Container>
  );
};

export default App;
