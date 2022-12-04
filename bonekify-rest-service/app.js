const express = require('express');
const routePenyanyi = require("./routes/routePenyanyi");
const routeUser = require("./routes/routeUser");
const routeSubscription = require("./routes/routeSubscription");
const routeLagu = require("./routes/routeLagu");

// https://www.digitalocean.com/community/tutorials/nodejs-jwt-expressjs

const app = express();
var cors = require('cors')
const port = 3000;

app.use(express.json());
app.use(cors())
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/penyanyi", routePenyanyi);
app.use("/user", routeUser);
app.use("/subscription", routeSubscription);
app.use("/lagu", routeLagu);
app.use('/static', express.static('uploads'));

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.listen(port, () => {
  console.log(`Bonekify REST Service listening on port ${port}`)
})