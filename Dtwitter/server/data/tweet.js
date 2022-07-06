let tweets = [
    {
        id: '1',
        text: '1번째',
        createdAt: Date.now().toString(),
        name: 'geonho',
        username: 'geonho',
        url: 'ddd'

    },
    {
        id: '2',
        text: '2번째',
        createdAt: Date.now().toString(),
        name: 'geonho',
        username: 'geonho2',
        url: 'ddd'
    },
];

export async function getAll(){
    return tweets;
}

export async function getAllByUsername(username){
    return tweets.filter(t => t.username === username);
}

export async function getById(id){
    return tweets.find(t => t.id === id);
} 

export async function create(text, name, username){
    const tweet = {
        id: Date.now().toString(),
        text,
        createdAt: new Date(),
        name,
        username
    };
    tweets = [tweet, ...tweets];
    return tweet;
}

export async function update(id, text){
    const tweet = tweets.find(t => t.id === id);
    if(tweet){
        tweet.text = text;
    }
    return tweet;
}

export async function remove(id){
    tweets = tweets.filter(t => t.id !== id);
}