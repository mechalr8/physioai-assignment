import './App.css';
import GlobalProvider from './context/GlobalProvider';
import { Routes, Route } from 'react-router-dom';
import SigninPage from './pages/SigninPage';
import HomePage from './pages/HomePage';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <GlobalProvider>
      <Routes>
        <Route path='/signin' element={<SigninPage />} />
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </GlobalProvider>
  );
}

export default App;
