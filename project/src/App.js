import React from 'react';
import Shrink from './sections/shrink/Shrink';
import TopList from './sections/top-list/TopList';
import Footer from './sections/footer/Footer';
import './App.css';

function App() {
    return (
        <div>
            <Shrink></Shrink>
            <TopList></TopList>
            <Footer></Footer>
        </div>
    );
}

export default App;
