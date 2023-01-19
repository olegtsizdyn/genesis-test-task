import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Game from './pages/Game';
import GameOver from './pages/GameOver';
import Welcome from './pages/Welcome';

const App = () => {
  return (
    <div className='container'>
      <Routes>
        <Route
          path=""
          element={ <Welcome /> } 
        />
        <Route 
          exact
          path="game"
          element={ <Game /> }
        />
        <Route
          exact
          path="game-over" 
          element={ <GameOver /> } 
        />

        <Route
          path="*"
          element={ <Navigate to="/" replace /> }
        />
      </Routes>
    </div>
  );
};

export default App;