const express = require('express');
const TaskRoute = require('./src/Route/TaskRoute');

const app = express();
app.use(express.json());
const port = 3000;

app.use("/api", TaskRoute);

app.listen(port, () => {
    console.log('Servidor rodando com sucesso porta: ' + port);
});
