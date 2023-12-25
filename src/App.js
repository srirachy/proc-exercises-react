import React from 'react';
import { Routes, Route} from 'react-router-dom';
import NavBarExercises from './components/NavBarExercises';
import Exercises from './pages/Exercises';
import Fourteen from './pages/Fourteen';
import Fifteen from './pages/Fifteen';
// import './App.css';

function App() {
    return (
        <>
            <NavBarExercises />
            <Routes>
                <Route index path='/' element={<Exercises />} />
                <Route path='/Fourteen' element={<Fourteen />} />
                <Route path='/Fifteen' element={<Fifteen />} />
            </Routes>
        </>
    );
}
 
export default App;