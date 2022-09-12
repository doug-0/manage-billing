import Router from './routes/Routes';
import Provider from './context/Provider';

import './App.css';

export default function App() {
  return (
    <Provider>
      <Router />
    </Provider>
  );
}
