import React, { useState } from 'react';
import CameraComponent from './CameraComponent';
import GestureAssignMenu from './GestureAssignMenu';
import './App.css';

const App = () => {
  const [gestureKeyMap, setGestureKeyMap] = useState({});
  const [recognizedGesture, setRecognizedGesture] = useState('');

  const handleGestureAssign = (gesture, keypress) => {
    setGestureKeyMap((prevMap) => ({ ...prevMap, [gesture]: keypress }));
  };

  return (
    <div className="app-container">
      <div className="taskbar">
        <h1>Moveocado</h1>
        <GestureAssignMenu
          gestureKeyMap={gestureKeyMap}
          onGestureAssign={handleGestureAssign}
          onDeleteGesture={(gesture) => {
            const updatedKeyMap = { ...gestureKeyMap };
            delete updatedKeyMap[gesture];
            setGestureKeyMap(updatedKeyMap);
          }}
        />
      </div>
      <div className="camera-container">
        <CameraComponent/>
      </div>
    </div>
  );
};

export default App;
