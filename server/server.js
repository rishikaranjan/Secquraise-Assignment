'use strict';

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import config from './config.js';

import userRouter from './routes/user-routes.js'




const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api', userRouter);


app.listen(config.port, () => console.log('App is listening on url http://localhost:' + config.port));



















// import express from 'express';
// import dotenv from 'dotenv';
// import cors from 'cors';



// import userRouter from './Routes/UserRouter.js';



// dotenv.config();




// const app = express();




// app.use(cors());

// app.use(express.json());

// app.use(express.urlencoded({extended: true}));




// app.use('/api/users', userRouter);





// const port = process.env.PORT || 5000;

// app.listen(port, () => {

//     console.log(`Connected on ${port}`);

// });