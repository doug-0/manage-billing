import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

export const FormTreatment = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #d9fcfc;
  border: 2px dotted #5ba19e;
  border-radius: 15px;
  padding: 35px;
  padding-bottom: 0px;
  width: 75%;
`;

export const InputFormTreatment = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid darkgray;
`;

export const ContainerLabel = styled.div`
  margin-bottom: 30px;
`;

export const LabelInputText = styled.label`
  margin-left: 20px;
  margin-right: 20px;
`;

export const SelectDropDown = styled.select`
  border: none;
  background-color: transparent;
  border-bottom: 1px solid darkgray;
  margin-right: 20px;
`;

export const Calendar = styled.input`
  border: none;
  background-color: transparent;
  border-bottom: 1px solid darkgrey;
`;

export const Button = styled.button`
  border: none;
  background-color: lightblue;
  border-radius: 4px;
  padding: 5px;
  margin-top: 30px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    transition: 0.3s;
    background-color: #BBD5F7;
    border-radius: 20px;
  }
`;
