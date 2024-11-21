const express = require("express");
const cors = require("cors");
const app = express();
const axios = require("axios");
require("dotenv").config();

const PORT = process.env.VITE_PORT;
app.use(cors());

app.get("/", (req, res) => {
  return res.json({ success: true });
});

app.get("/countries", (req, res) => {
  const options = {
    url: `https://${process.env.VITE_ASTRA_DB_ID}-${process.env.VITE_ASTRA_DB_REGION}.apps.astra.datastax.com/api/rest/v2/namespaces/${process.env.VITE_ASTRA_DB_KEYSPACE}/collections/${process.env.VITE_ASTRA_DB_KEYSPACE}`,
    headers: {
      accept: "application/json",
      "X-Cassandra-Token": process.env.VITE_ASTRA_DB_APPLICATION_TOKEN,
    },
  };

  axios
    .request(options)
    .then((response) =>
      res.json(response.data.data["231c2c94-5651-4ac2-b21a-9fec42bd7b66"])
    )
    .catch((err) => console.log(err));
});

app.listen(PORT, () => console.log("running LOL"));
