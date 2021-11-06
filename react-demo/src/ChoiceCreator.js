import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { saveChoice } from './api';

const ChoiceCreator = () => {
    const navigate = useNavigate();

    const [ text, setText ] = useState('');

    const onChange = (event) => {
        setText(event.target.value);
    }

    const onClick = async () => {
        await saveChoice({ text });
        navigate('/');
    }

    return <div>
        <h2>Создаём новый вариант ответа!</h2>
        <input
            placeholder="Введите текст"
            value={ text }
            onChange={ onChange }
        />
        <button
            onClick={ onClick }
            disabled={ !text }
        >
            Сохранить
        </button>
    </div>
};

export default ChoiceCreator;