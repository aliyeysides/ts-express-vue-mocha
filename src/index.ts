import express from 'express';

const app = express();
const port = process.env.APP_PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// serve static
app.use(express.static('./client/dist/'));
app.get('*', (req, res) => { res.sendFile('./client/dist/index.html'); });

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});
