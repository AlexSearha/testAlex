// React
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Layouts
import HomeLayout from '../layouts/HomeLayout';
// Outlets
import AccountPage from '../pages/AccountPage/AccountPage';
import AuthPage from '../pages/AuthPage/AuthPage';

// --------------------------------------------------------------------//
// ----------------------------Component-------------------------------//
// --------------------------------------------------------------------//

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<AuthPage />} />
          <Route path="/project-desktop" element={<AccountPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
