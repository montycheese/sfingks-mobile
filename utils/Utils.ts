

export function getMockMessages(): Array<object> {
    const now = Date.now();
    return [
        {
            _id: 1,
            text: 'Welcome to Sfingks. We do something special each day, once a day.',
            user: {
                _id: 2,
                name: 'React Native',
                avatar: 'https://placeimg.com/140/140/any',
            },
            createdAt: new Date(now + 100)
        },
        {
            _id: 4,
            text: "We'll drop hints across social media. You can even search this app for clues...",
            user: {
                _id: 2,
                name: 'React Native',
                avatar: 'https://placeimg.com/140/140/any',
            },
            createdAt: new Date(now + 105)
        },
        {
            _id: 6,
            image: 'https://placekitten.com/200/300',
            user: {
                _id: 2,
                name: 'React Native',
                avatar: 'https://placeimg.com/140/140/any',
            },
            createdAt: new Date(now + 106)
        },
        {
            _id: 7,
            text: '%SFINGSK%_GAME-GAME_TYPE-some_uuid',
            user: {
                _id: 2,
                name: 'React Native',
                avatar: 'https://placeimg.com/140/140/any',
            },
            createdAt: new Date(now + 107)
        },
        {
            _id: 2,
            text: 'Hello back',
            user: {
                _id: 1,
                name: 'React Native',
                avatar: 'https://placeimg.com/140/140/any',
            },
            createdAt: new Date(now + 108)
        },
        {
            _id: 3,
            text: 'Hello back',
            user: {
                _id: 1,
                name: 'React Native',
                avatar: 'https://placeimg.com/140/140/any',
            },
            createdAt: new Date(now + 50000)
        },
        {
            _id: 5,
            text: 'https://www.sengage.io',
            user: {
                _id: 2,
                name: 'React Native',
                avatar: 'https://placeimg.com/140/140/any',
            },
            createdAt: new Date(now + 500000)
        }
    ]
}
