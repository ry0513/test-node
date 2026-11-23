const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Express example!" });
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.post("/api/echo", (req, res) => {
  res.json({ received: req.body });
});

app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Express server listening on http://localhost:${port}`);
  });
}

module.exports = app;
