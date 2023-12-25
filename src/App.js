import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Fourteen from './pages/Fourteen';
import Exercises from './pages/Exercises';
import NavBarExercises from './components/NavBarExercises';
// import './App.css';

function App() {
    return (
        <>
            <NavBarExercises />
            <Routes>
                <Route index path='/' element={<Exercises />} />
                <Route path='/Fourteen' element={<Fourteen />} />
            </Routes>
        </>
    );
}
 
export default App;