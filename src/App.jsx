import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Clock from './components/Clock'
import LocalTime from './components/LocalTime'
import Pomodoro from './components/Pomodoro'
import Timer from './components/Timer'
import ShortBreak from './components/ShortBreak'
import LongBreak from './components/LongBreak'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Clock></Clock>}></Route>
        <Route path='/localtime' element={<LocalTime></LocalTime>}></Route>
        <Route path='/pomodor' element={<Pomodoro></Pomodoro>}></Route>
        <Route path='/timer' element={<Timer></Timer>}></Route>
        <Route path='/longbreak' element={<LongBreak></LongBreak>}></Route>
        <Route path='/shortbreak' element={<ShortBreak></ShortBreak>}></Route>
      </Routes>
    </div>
  )
}

export default App;