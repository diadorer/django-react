const mockedPolls = [{
    id: 1,
    title: 'Что лучше?',
    items: [{
        id: 1,
        text: 'Приостановка работы Facebook, WhatsApp и Instagram на несколько часов',
    }, {
        id: 2,
        text: 'Полное прекращение работы Telegram в России',
    }]
}]

export const getPolls = async () => {
    return mockedPolls;
}

export const getPollDetails = async (pollId) => {
    return mockedPolls.find(item => item.id === pollId);
}
