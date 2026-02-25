const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;
app.use(cors());

app.get("/", (req, res) => {
  res.send("server is working");
});
app.get("/api/joke", async (req, res) => {
  try {
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    const data = await response.json();

    res.status(200).json({
      type: data.type,
      setup: data.setup,
      punchline: data.punchline,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
    error: "Failed to fetch joke",
    });
  }
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
