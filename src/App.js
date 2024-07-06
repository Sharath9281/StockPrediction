
import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import LoginForm from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import Paymentpage from './Pages/Payment';
import { AuthContext } from './context/AuthContext';
import Subscription from './Pages/Subscription';
import LiveGraph from './Pages/Livegraph';

const App = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<LandingPage />}
        />
        <Route
          path="/login"
          element={<LoginForm />}
        />
        <Route path="/signup" element={<SignupPage />} />
        {isLoggedIn? <Route path="/subscription" element={<Subscription/>} /> : <Route path="/login" element={<LoginForm />}/>}
        <Route
        path="/payment"
        element={<Paymentpage/>}
        />
        <Route
          path="/livegraph"
          element={<LiveGraph/>}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;