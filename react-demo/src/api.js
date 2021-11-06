const mockedChoices = [{
    id: 1,
    text: 'Приостановка работы Facebook, WhatsApp и Instagram на несколько часов',
}, {
    id: 2,
    text: 'Полное прекращение работы Telegram в России',
}];

const API_HOST = process.env.REACT_APP_API_HOST || '';

console.log('NODE_ENV', process.env.NODE_ENV);

const request = async (url, { body } = {}) => {
    const method = body ? 'POST' : 'GET';
    return (await fetch(API_HOST + url, {
        method,
        body: body && JSON.stringify(body),
    })).json();
}

export const getChoices = async () => {
    return (await request('/api/polls/choices/')).items;
}

export const saveChoice = async ({ text }) => {
    console.log('saving text=', text);

    await request('/api/polls/choices/add/', {
        body: {
            text,
        },
    })
}