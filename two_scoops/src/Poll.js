import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getChoices } from './api';

const Poll = () => {
    const [choices, setChoices] = useState(null);

    useEffect(() => {
        getChoices()
            .then(choices_ => setChoices(choices_));
    }, []);

    if (!choices) {
        return 'Загружаемся...';
    }

    return <div>
        <b>Что лучше?</b>
        { choices.map(item => {
            return <div key={ item.id }>
                { item.text }
            </div>
        })}

        <div style={{ marginTop: '66px' }}>
            <Link className="App-link" to="choices/add">Добавить свой вариант ответа</Link>
        </div>
    </div>
}

export default Poll;
