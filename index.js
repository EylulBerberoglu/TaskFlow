
const express = require("express");

const app = express();
const PORT = 3000;

// JSON verilerini okuyabilmek için
app.use(express.json());

// Logger Middleware
const logger = require("./middlewares/logger");
app.use(logger);

// Görev API rotaları
const taskRoutes = require("./routes/tasks");
app.use("/tasks", taskRoutes);

// Ana sayfa
app.get("/", (req, res) => {
  res.json({
    message: "TaskFlow API başarıyla çalışıyor!"
  });
});

// Sunucuyu başlat
app.listen(PORT, () => {
  console.log(`Server http://localhost:${PORT} adresinde çalışıyor`);
});
