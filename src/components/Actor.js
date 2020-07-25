import React from 'react';

const Actor = ({ actors }) => {
    const item = actors.map(actor => (
        <div className='cards' key={actor.char_id}>
            <div className='front card'>
                <img src={actor.img} alt='' />
            </div>
            <div className='back card'>
                <div className='content'>
                    <h2>{actor.name}</h2>
                    <p>Actor Name : {actor.portrayed}</p>
                    <p>Nickname : {actor.nickname}</p>
                    <p>Birthday : {actor.birthday}</p>
                    <p>Status : {actor.status}</p>
                </div>
            </div>
        </div>
    ));
    return <div className='card_container'>{item}</div>;
};

export default Actor;
