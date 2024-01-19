import { Route, Routes } from 'react-router-dom';
import AllEmployes from '../pages/AllEmployes.jsx';
import Details from '../pages/Details.jsx';
import { default as Employes } from '../pages/Employes.jsx';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Employes />}>
        <Route path='' element={<AllEmployes />} />
        <Route path=':id' element={<Details />} />
      </Route>
    </Routes>
  );
}
