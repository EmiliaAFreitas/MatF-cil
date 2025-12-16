
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { SplashScreen } from './screens/SplashScreen';
import { Login } from './screens/Login';
import { Home } from './screens/Home';
import { GameScreen } from './screens/GameScreen';
import { Summary } from './screens/Summary';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/game/:topic" element={<GameScreen />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
