import { Route, Routes, Navigate } from 'react-router-dom';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Main from '../components/Main';
import Treatments from '../pages/Treatments';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/treatments"
        element={(
          <Main>
            <Treatments />
          </Main>
      )}
      />
    </Routes>
  );
}
