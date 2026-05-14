const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const app = express();
const PORT = 8081;

// Importing routes
const contactRoutes = require("./routes/contact.routes");

// Middleware
app.use(express.json());
app.use(cors());

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      "default-src": ["'self'"],
      "script-src": ["'self'", "trusted-scripts.com", "'unsafe-eval'"],
      "object-src": ["'none'"]
    }
  })
);

app.use("/api", contactRoutes);

app.get("/health", async (req, res) => {
  return res.status(200).json({
    status: "ok",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

// For local development
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

module.exports = app;