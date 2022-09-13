import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 35px;
  padding-bottom: 20px;
  justify-content: space-between;
  box-shadow: 1px 1px 150px lightgray;
  @media (max-width: 400px) {
    padding: 20px;
    padding-bottom: 5px;
  }
`;

export const ButtonsHeader = styled.a`
  text-decoration: none;
  font-size: 17px;
  margin-right: 50px;
  color: #5ba19e;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    transition: 0.3s;
    color: #8dd0cf;
  }

  @media (max-width: 400px) {
    margin-right: 25px;
  }
`;
