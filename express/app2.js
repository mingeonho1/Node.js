import express from 'express';
const app = express();

app.all('/api', (req, res, next) => { //  all은 딱 /api에서만 안을 실행시킴
    console.log('all');
    next();
})

app.use('/sky', (req, res, next) => { // use는 /sky/@@@에서도 안을 실행시킴
    console.log('use');
    next();
})

app.get(
    '/',
    (req, res, next) => {
        console.log('first');
        if (false) {
            return res.send('True');
        }
        res.send('False')
        // next('route');   // 다음으로 넘어감
    },
    (req, res, next) => {
        console.log('first2');
        next();
    }
);

app.get('/', (req, res, next) => {
    console.log('second');
    next(new Error('error'))
});

app.use((req, res, next) => {
    res.status(404).send("NOT PAGE !!")
})

app.use((error, req, res, next) => {
    console.log(error);
    res.status(500).send("Error page!!!")
})
app.listen(8080);