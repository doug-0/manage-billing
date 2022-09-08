import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import { Props } from '../interface/PropsChildren';

export default function Main({ children }: Props): JSX.Element {
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
