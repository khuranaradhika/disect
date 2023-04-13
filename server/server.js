const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const app = express();
//connect Database
connectDB();

//Init Middleware
app.use(express.json({ extend: false }));
//Set cors policy
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}
app.use(cors(corsOptions));

app.get('/', (req, res) => res.send('API Running'));
//Define Route
app.use('/api/charities', require('./routes/api/charities'));
app.use('/api/emissions', require('./routes/api/emissions'));
// Check if the slack channel is workingfsdsdfsdkhfajksdfhjklashfajklsd

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
