// Import required packages and modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Import API routes
const usersRoutes = require('./routes/user');
// const matchingRoutes = require('./routes/matching');
// const networkingRoutes = require('./routes/networking');
// const eventsRoutes = require('./routes/events');
// const chatRoutes = require("./routes/chat");


// Initialize Express app
const app = express();

// Set up middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Set up database connection
const uri = 'mongodb+srv://A0lish7_:A0lish7@clusternoob.umtu1w6.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Database connected!'))
  .catch((err) => console.error(err));

// Set up API routes
app.use('/api/users', usersRoutes);
// app.use('/api/matching', matchingRoutes);
// app.use('/api/networking', networkingRoutes);
// // app.use('/api/events', eventsRoutes);
// app.use("/api/chat", chatRoutes);

// Set up error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
