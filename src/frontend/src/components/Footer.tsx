import { FooterContainer, LinkFooter } from '../styles/Footer';

export default function Footer(): JSX.Element {
  return (
    <FooterContainer className="footer-page">
      Desenvolvido por
      {' '}
      <LinkFooter
        href="https://www.linkedin.com/in/douglas-d-oliveira/"
        target="_blank"
        rel="noreferrer"
      >
        Douglas Oliveira
      </LinkFooter>
    </FooterContainer>
  );
}
