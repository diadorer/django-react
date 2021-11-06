import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getChoices } from './api';

const Poll = () => {
    const [ choices, setChoices ] = useState(null);

    useEffect(() => {
        getChoices()
            .then((choices_) => setChoices(choices_));

        console.log('functional Poll mounted!')
        
        return () => console.log('component did unmounted!');
    }, [])

    if (!choices) {
        return 'Загружаемся...';
    }

    return <div>
        <b>Что лучше?</b>
        { choices.map(item => {
            return <div key={ item.id }>
                { item.text }
            </div>
        }) }

        <div style={{ marginTop: '60px' }}>
            <Link className="App-link" to="/choices/add">
                Добавить свой вариант
            </Link>
        </div>
    </div>
}

export default Poll;
