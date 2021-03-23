import React from 'react';
import logo from './logo.svg';
import './App.css';
import TextBlock from './TextBlock'
import {useAnimatedScale, useDimension} from './hooks'
function App() {
  const {sf, start} = useAnimatedScale()
  const {w, h} = useDimension()
  return (
    <div>
      <TextBlock w = {w} h = {h} scale = {sf} onClick = {start}  text = "hello">
      </TextBlock>
    </div>
  );
}

export default App;
