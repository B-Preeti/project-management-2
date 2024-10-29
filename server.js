const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const projectsRouter = require('./routes/projects');

const app = express();
const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.sendFile(path.resolve('public', 'index.html'));
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/api', projectsRouter);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
