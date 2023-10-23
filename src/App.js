import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Pay from './Screens/Pay';
import Success from './Screens/Success';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pay" element={<Pay />} >
        </Route>
        <Route path="/success" element={<Success />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App