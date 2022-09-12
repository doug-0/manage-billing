import styled from 'styled-components';

export const TableTreatment = styled.table`
  width: 85%;
  border-collapse: collapse;
  margin-top: 20px;
  box-shadow: 5px 15px 15px lightgray;
  th {
    border: 0.5px solid #ddd;
    height: 70px;
    padding: 15px;
    text-align: center;
    background-color: #7c82fd;
    color: white;
  }

  td {
    text-align: center;
    height: 50px;
    vertical-align: middle;
    padding: 10px;
    border: 1px solid #ddd;
  }

  tr {
    transition: 0.3s;
    &:hover {
      transition: 0.3s;
      background-color: #f2f2f2;
    }
    &:nth-child(even) {
      background-color: #f2f2f2;
    }
  }
`;

export const ContainerTable = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const TotalValue = styled.h3`
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: start;
  margin-left: 100px;
  margin-top: 45px;
  margin-bottom: 45px;
  background-color: lightgray;
  border: 1px solid darkgray;
  width: 180px;
  padding: 5px;
  border-radius: 5px;
`;

export const ButtonAction = styled.button`
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
`;
