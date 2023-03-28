import express from 'express';
import http from 'http';
import listen from './socket/index.js';

const PORT = 5000;
const app = express();
const server = http.createServer(app);

// require('./socket').listen(server);
listen(server);

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));