import styled from 'styled-components';

export const FooterContainer = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 20px;
  color: lightgray;
`;

export const LinkFooter = styled.a`
  text-decoration: none;
  color: lightgray;

  &:hover {
    text-decoration: none;
    color: rgb(20, 69, 85);
    border-bottom: lightblue;
  }
`;
