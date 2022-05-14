import express from 'express';
import mongoose from 'mongoose';
import blogRouter from './routes/blog-routes';
import router from './routes/user-routes';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json())

app.use('/api/user', router)
app.use('/api/blog', blogRouter)

mongoose
    .connect(
        'mongodb+srv://admin:{process.env.MONGODB_PASSWORD}@cluster0.vl3fm.mongodb.net/Blog?retryWrites=true&w=majority'
    )
    .then(() => app.listen(3000))
    .then(() =>
        console.log('Connected to Database and Listening to Port 3000'))
    .catch(err => console.log(err))

