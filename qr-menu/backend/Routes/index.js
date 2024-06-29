const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

const mongoDB = require('./db');
mongoDB();

// CORS setup
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());

// Routes
app.use('/api/', require("./Routes/CreateUser")); // for create user profile
app.use('/api/', require("./Routes/login")); // for login of user
app.use('/api/', require("./Routes/DisplayData")); // for display data

// start server
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
