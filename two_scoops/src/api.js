// const mockedChoices = [{
//     id: 1,
//     text: 'Приостановка работы Facebook, WhatsApp и Instagram на несколько часов',
// }, {
//     id: 2,
//     text: 'Полное прекращение работы Telegram в России',
// }]

const request = async (url, { body } = { body: undefined }) => {
    const method = body ? 'POST' : 'GET';

    return (await fetch(url, {
        method,
        body: body && JSON.stringify(body),
    })).json();
}

export const getChoices = async () => {
    const data = await request('/api/polls/choices/');
    return data.items;
}

export const saveChoice = async ({ text }) => {
    await request('/api/polls/choices/add/', {
        body: {
            text,
        },
    })
}
