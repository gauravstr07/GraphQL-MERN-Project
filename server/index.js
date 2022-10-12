const express = require("express");
const colors = require('colors')
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const connectDB = require('./config/db');

const app = express();
const port = process.env.PORT;

connectDB();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.get("/", (req, res) => {
  res.send("Hello from express server");
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}🤖`);
});
