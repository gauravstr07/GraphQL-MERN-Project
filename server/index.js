const express = require("express");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");

const app = express();
const port = process.env.PORT;

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
