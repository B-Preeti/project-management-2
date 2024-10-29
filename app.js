const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const projectsRouter = require('./routes/projects');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static(path.resolve('assets')));


let projects = [
    { name: 'Project face detection', description: 'Description A', date: '2024-01-15', users: ['Alice', 'Bob','Charlie'] },
    { name: 'Project Learning App', description: 'Description B', date: '2024-02-20', users: ['Diya','Dev'] },
    { name: 'Project Home Prediction', description: 'Description C', date: '2024-03-10', users: ['Raj', 'Ria','Rose'] },
    { name: 'Project Profile Website', description: 'Description D', date: '2024-04-05', users: ['Ram','Dheeraj'] },
    { name: 'Project Eye Detection', description: 'Description E', date: '2024-05-15', users: ['Priya','Sam','Swetha'] },
];


app.get('/projects', (req, res) => {
    res.json(projects);
});


app.post('/projects', (req, res) => {
    const { name, description, date } = req.body;
    projects.push({ name, description, date, users: [] }); 
    res.status(201).json({ message: 'Project added successfully' });
});


app.get('/', (req, res) => {
    res.sendFile(path.resolve('public', 'index.html'));
});

app.use('/api', projectsRouter);



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
