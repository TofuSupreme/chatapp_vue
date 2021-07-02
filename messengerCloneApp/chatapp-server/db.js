const rooms = {
    '1': {
        id: '1',
        users: ['UserName','TofuSupreme'], // Strings
        messages: [ // Objects
            {
                from: 'UserName',
                text: 'Hello there!'
            },
            {
                from: 'UserName',
                text: 'How is it going?'
            },
            {
                from: 'TofuSupreme',
                text: 'Hey whats up?'
            },
            {
                from: 'UserName',
                text: 'Nothing much!'
            },
            {
                from: 'UserName',
                text: 'I got some good wares!'
            },
            {
                from: 'TofuSupreme',
                text: 'Um.. nah, I am good'
            },
        ]
    },
    '2': {
        id: '2',
        users: ['UserName2','TofuSupreme'], // Strings
        messages: [ // Objects
            {
                from: 'UserName2',
                text: 'Hey there, long time no see!'
            },
            {
                from: 'UserName2',
                text: 'Do you remember me?'
            },
            {
                from: 'TofuSupreme',
                text: 'Oh yeah! I remember you!'
            },
            {
                from: 'UserName2',
                text: 'Its been a while but...'
            },
            {
                from: 'UserName2',
                text: 'I got some good wares!'
            },
        ]
    },
};

module.exports = rooms