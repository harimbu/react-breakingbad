import React, { useState } from 'react';

const Search = () => {
    const [input, setInput] = useState('');
    return (
        <form action=''>
            <input
                type='text'
                value={input}
                onChange={e => setInput(e.target.value)}
            />
            <button>Search</button>
        </form>
    );
};

export default Search;
