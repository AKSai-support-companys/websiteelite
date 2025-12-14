import React from 'react';
import './App.css';
import CoreAgenticAI from './components/CoreAgenticAI';
import SecondaryServices from './components/SecondaryServices';
import EngagementModels from './components/EngagementModels';
import Stabilization from './components/Stabilization';

function App() {
  return (
    <div className="App">
      <CoreAgenticAI />
      <SecondaryServices />
      <EngagementModels />
      <Stabilization />
    </div>
  );
}

export default App;
