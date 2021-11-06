import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getPolls } from './api';

import logo from './logo.svg';

const Polls = () => {
    const [polls, setPolls] = useState([]);

    useEffect(() => {
        getPolls()
            .then(polls_ => setPolls(polls_));
    }, []);

    return <div>
        <img src={logo} className="App-logo" alt="logo" />
        <div>
            Пора сделать свой выбор:
            { polls.map(poll => {
                return <div key={ poll.id }>
                    <Link 
                        to={ `polls/${poll.id}` }
                        className="App-link"
                    >{ poll.title }</Link>
                </div>
            }) }
        </div>
    </div>
}

export default Polls;
