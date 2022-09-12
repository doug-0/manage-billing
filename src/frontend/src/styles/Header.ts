import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 35px;
  padding-bottom: 20px;
  justify-content: space-between;
  /* border-bottom: 1px solid #beffff; */
  box-shadow: 1px 1px 150px lightgray;
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
`;
