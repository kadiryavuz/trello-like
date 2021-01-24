const app = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

//routes
const tasks = require('./routes/tasks');
const boards = require('./routes/boards');
const users = require('./routes/users');

const { MONGODB } = require("./config");

const port = 5000;

const enableGlobalErrorLogging =
  process.env.ENABLE_GLOBAL_ERROR_LOGGING === "true";
  
app.use(cors());

// Request to be handled as JSON by default
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//using routes
app.use("/api/boards", boards);
app.use("/api/tasks", tasks);
app.use("/api/users", users);

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Trello-Like API!",
  });
});

// send 404 if no other route matched
app.use((req, res) => {
  res.status(404).json({
    message: "Route Not Found",
  });
});

// setup a global error handler
app.use((err, req, res, next) => {
  if (enableGlobalErrorLogging) {
    console.error(`Global error handler: ${JSON.stringify(err.stack)}`);
  }

  res.status(err.status || 500).json({
    message: err.message,
    error: {},
  });
});


mongoose
  .connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("⚡ Connected to DB..");
    return app.listen(port);
  })
  .then((server) => {
    // console.log("Data: ", data);
    console.log(`🚀 Server ready at http://localhost:${server.address().port}`);

  })
  .catch((err) => {
    console.log("An error occured: ", err);
  });
