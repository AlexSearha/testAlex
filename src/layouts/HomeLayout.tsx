// React
import { Outlet } from 'react-router-dom';
// Components
import Header from '../outlets/header/Header';
// --------------------------------------------------------------------//
// ----------------------------Component-------------------------------//
// --------------------------------------------------------------------//

function HomeLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default HomeLayout;
