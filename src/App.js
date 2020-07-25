import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Actor from './components/Actor';
import axios from 'axios';
import './App.css';
import Loading from './components/Loading';

function App() {
    const [actors, setActors] = useState([]);
    const [isLoading, setIsloading] = useState(true);
    const [input, setInput] = useState('');

    useEffect(() => {
        async function getItem() {
            const response = await axios(
                `https://www.breakingbadapi.com/api/characters?name=${input}`
            );
            setActors(response.data);
            setIsloading(false);
        }
        getItem();
    }, [input]);

    return (
        <div className='container'>
            <Header />
            <form layout='inline'>
                <input
                    type='text'
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder='Search Character'
                />
            </form>
            <div className='card_wrapper'>
                {isLoading ? <Loading /> : <Actor actors={actors} />}
            </div>
        </div>
    );
}

export default App;
