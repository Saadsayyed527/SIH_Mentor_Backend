const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors')
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
connectDB();


app.use(express.json({ extended: false }));

app.use('/api/auth', require('./routes/authRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
