import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getPollDetails } from './api';

const Poll = () => {
    const { pollId } = useParams();
    
    const [poll, setPoll] = useState(null);

    useEffect(() => {
        getPollDetails(Number(pollId))
            .then(poll_ => setPoll(poll_));

        return () => setPoll(null);
    }, [ pollId ]);

    if (!poll) {
        return 'Загружаемся...';
    }

    return <div>
        <b>{ poll.title }</b>
        { poll.items.map(item => {
            return <div key={ item.id }>
                <label>
                    <input type="radio" name="poll" value={ item.id } />
                    { item.text }
                </label>
            </div>
        })}
    </div>
}

export default Poll;
