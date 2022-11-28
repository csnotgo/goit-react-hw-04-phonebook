import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  margin: 30px 0;
`;

export const Label = styled.label`
  font-size: 20px;
`;

export const Input = styled.input`
  width: 250px;
  height: 30px;
  padding: 0 10px;
  margin-left: 10px;

  font-size: 18px;
  border: 1px solid gray;
  border-radius: 6px;
`;

export const Button = styled.button`
  align-self: flex-end;
  width: 110px;
  height: 35px;
  padding: 0;
  margin-top: 15px;

  font-size: 16px;
  border: 1px solid gray;
  border-radius: 6px;

  cursor: pointer;
`;
