import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  gap: 16px;
`;

export const Form = styled.form`
  > a {
    text-decoration: none;
  }
`;

export const Input = styled.input`
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  color: black;
`;

export const Button = styled.button`
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  color: black;
`;
