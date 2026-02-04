const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get("/hello", (req, res) => {
  res.json({
    message: "Hello from Brayudo Factory!",
    timestamp: new Date().toISOString(),
    status: "operational"
  });
});

app.get("/health", (req, res) => {
  res.json({ status: "healthy", service: "hello-world-factory-backend" });
});

app.listen(PORT, () => {
  console.log(`🚀 Backend server running on http://localhost:${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/health`);
  console.log(`👋 Hello endpoint: http://localhost:${PORT}/hello`);
});
