const express = require('express');
const connectDB = require('./config/db');

const app = express();
//connect Database
connectDB();

//Init Middleware
app.use(express.json({ extend: false }));

app.get('/', (req, res) => res.send('API Running'));
//Define Route
app.use('/api/charities', require('./routes/api/charities'));
// Check if the slack channel is workingfsdsdfsdkhfajksdfhjklashfajklsd

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
