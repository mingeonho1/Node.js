import express from 'express';
import 'express-async-error';

const tweets = [
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
        username: 'geonho',
        url: 'ddd'
    },
];
const router = express.Router();

//GET /tweets
//GET /tweets?username=:username
router.get('/', (req, res, next) => {
    const username = req.query.username;
    const data = username
     ? tweets.filter((t) => t.username === username) 
     : tweets;
    res.status(200).json(data);
});

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    const tweet = tweets.find((t) => t.id === id;)
})
export default router;