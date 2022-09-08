import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

interface Props {
  children?: JSX.Element;
}

export default function Main({ children }: Props) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
};
