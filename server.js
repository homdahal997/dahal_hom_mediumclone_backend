// Requiring and configuring the .env file to access its variables
require('dotenv').config();
// Requiring express
const express = require('express');
// Creating the express server and storing inside the app variable
const app = express();
const cors = require('cors');
// Port in which the server will run on
const PORT = process.env.PORT || 8000;
// Requiring example router
const userRouter = require('./routes/userRoutes.js');
const postRouter = require('./routes/postRoutes.js');
const commentRouter = require('./routes/commentRoutes.js');

const errorHandler = require('./middleware/error.js');

// Middleware to enable CORS
app.use(cors());

// Configuring the server to accept and parse JSON data.
app.use(express.json());

//Custom Middlware
app.use((req, res, next) => {
  console.log(`A ${req.method} request was made to ${req.url}`);
  next();
});

// Connecting the router to the server
app.use('/api/v1/users', userRouter);
app.use('/api/v1/posts', postRouter);
app.use('/api/v1/comments', commentRouter);

// Catch-all route handler
app.all('*', (req, res) => {
  res.status(404).json({Error : 'The requested resource was not found on this server.'});
});

// Error Handling Middlware
app.use(errorHandler);

// // Error Handling Middlware
// app.use((err, req, res, next) => {
//   res.status(500).send('Something went wrong.');
// });

// Calling the listen function telling the server to listen on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
