import { Route, Routes } from 'react-router-dom';
import Index from '../pages';
import Details from '../pages/Details';
import { default as Employes } from '../pages/Employes';
import AllEmployes from '../pages/AllEmployes';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Index />} />
      <Route path='employes' element={<Employes />}>
        <Route path='' element={<AllEmployes />} />
        <Route path=':id' element={<Details />} />
      </Route>
    </Routes>
  );
}
