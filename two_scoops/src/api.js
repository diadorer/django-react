const mockedChoices = [{
    id: 1,
    text: 'Приостановка работы Facebook, WhatsApp и Instagram на несколько часов',
}, {
    id: 2,
    text: 'Полное прекращение работы Telegram в России',
}]

export const getChoices = async () => {
    return mockedChoices;
}

export const saveChoice = async ({ text }) => {
    console.log('saving text=', text);

    return {};
}
