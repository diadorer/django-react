import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { saveChoice } from './api';

const ChoiceCreator = () => {
    const navigate = useNavigate();

    const [ text, setText ] = useState('');
    const onSave = async () => {
        await saveChoice({ text });

        navigate('/');
    }

    return <div>
        <h2>Добавим вариант ответа:</h2>
        <input 
            placeholder="Введи-ка текст"
            value={ text }
            onChange={ (event) => setText(event.target.value) }
        />
        <button 
            onClick={ onSave }
            disabled={ !text }
        >
            Сохранить
        </button>
    </div>
}

export default ChoiceCreator;