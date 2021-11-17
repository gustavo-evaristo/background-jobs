import 'dotenv/config';
import express from 'express';

const app = express();

app.use(express.json());

app.post('/users', (req, res) => {
    const { name, email, password  } = req.body;

    const user = { name, email, password };

    return res.json(user);
});

app.listen(3333, () => console.log('server runnig on localhost:3333'));
