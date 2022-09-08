import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <div>
          <Link
            to="/register"
          >
            Registrar Novo Tratamento
          </Link>
          <Link
            to="/treatments"
          >
            Todos os Tratamentos
          </Link>
        </div>
        <div>
          <Link
            to="/"
          >
            Logout
          </Link>
        </div>
      </nav>
    </header>
  );
}
