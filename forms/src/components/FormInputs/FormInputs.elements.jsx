import styled from "styled-components";
import { Button } from "../../globalStyles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

export const FormInputContainer = styled.form`
  display: flex;
  flex-direction: column;
  color: gray;
  justify-content: center;
  background-color: white;
  padding: 10px;
  width: 100%;
`;

export const FormLabel = styled.label`
  font-size: 16px;
  background-color: white;
`;

export const FormInput = styled.input`
  font-size: 16px;
  padding: 15px;
  margin: 10px 0;
  border-radius: 10px;
  background-color: white;
`;

export const FormButton = styled(Button)`
  font-size: 16px;
  width: 20%;
`;
