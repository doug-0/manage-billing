import styled from 'styled-components';

export const FilterContainer = styled.div`
  background-image: linear-gradient(180deg, #f1f9ff 0%, #e7f0f0 100%);
  background-color: lightgray;
  display: flex;
  align-items: center;
  padding: 15px;
  border-radius: 15px;
  margin-top: 15px;
  border: 1px solid lightgray;

  @media (max-width: 700px) {
    width: 90%;
    font-size: 10px;
  }

  @media (max-width: 500px) {
    width: 70%;
    font-size: 10px;
    flex-direction: column;
  }
`;

export const DivInputDate = styled.div`
  align-items: center;
  margin-top: 2.5px;
  margin-left: 6px;
  margin-right: 10px;
`;

export const ButtonActionFilter = styled.button`
  background-color: transparent;
  padding: 5px;
  margin-left: 8px;
  cursor: pointer;
  border: 1px solid lightgray;
  border-radius: 10px;
  transition: 0.3s;
  
  &:hover {
    transition: 0.3s;
    background-color: white;
  }

  &:hover {
    transition: 0.3s;
    background-color: white;
  }

  &:disabled {
    cursor: not-allowed;
    &:hover {
      background-color:transparent;
    }
  }

  @media (max-width: 700px) {
    font-size: 10px;
  }
`;
