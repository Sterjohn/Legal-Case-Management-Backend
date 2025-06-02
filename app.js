const express = require('express');
const app = express();
require('dotenv').config();
const sequelize = require('./config/database');
const authRoutes = require('./routes/auth');
const clientRoutes = require('./routes/clients');
const caseRoutes = require('./routes/cases');

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/clients', clientRoutes);
app.use('/cases', caseRoutes);

sequelize.sync();

module.exports = app;
