// React
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ToolbarComponent from '../components/Toolbar/Toolbar';
// Components

// --------------------------------------------------------------------//
// ----------------------------Component-------------------------------//
// --------------------------------------------------------------------//

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ToolbarComponent />} />
        <Route path="/about" element={<h1>About</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
