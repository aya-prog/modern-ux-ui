const express = require('express');
const { Pool } = require('pg'); // PostgreSQL Client
const app = express();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL // Kommt von Kubernetes Secrets
});

app.get('/api/status', async (req, res) => {
  res.json({ message: "Backend & DB verbunden!" });
});

app.listen(3000, () => console.log('API läuft auf Port 3000'));
