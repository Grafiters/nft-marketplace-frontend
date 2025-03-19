import "dotenv/config";
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dbConnection from './helper/mongoose.js'
const app_name = process.env.APP_NAME || "Ryudelta NFT Project";
const env = process.env.ENV || "Development";

// Handle ES module paths correctly
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 5000;

// dbConnection()

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

app.get('/api/json-data', async (req, res) => {
  const { path: folderPath, filename } = req.query;

  const filePath = path.join(__dirname, `public/${folderPath}/${filename}`);

  console.log(!fs.existsSync(filePath));
  
  try {
    if (!fs.existsSync(filePath)) {
      return res.status(200).json({ data: [] });
    }

    const data = fs.readFileSync(filePath, 'utf-8');
    if (!data) {
      return res.status(200).json({ data: [] });
    }
    const toJson = JSON.parse(data);

    res.status(200).json({ data: toJson });
  } catch (error) {
    console.error('Error reading JSON file:', error);
    res.status(500).json({ message: 'Failed to read JSON file' });
  }
});

app.post('/api/rewrite-json', async (req, res) => {
  const { path: folderPath, filename, data } = req.body;
  const filePath = path.join(__dirname, `public/${folderPath}/${filename}`);

  try {
    let existingData = [];

    if (fs.existsSync(filePath)) {
      const fileContents = fs.readFileSync(filePath, 'utf-8');
      existingData = JSON.parse(fileContents); // Parse the existing data
    }

    // Append the new data to the existing array
    existingData.push(data);

    // Write the updated array back to the file
    fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2), 'utf-8');

    res.status(200).json({ message: 'Data appended successfully!', data: existingData });
  } catch (error) {
    console.error('Error writing JSON file:', error);
    res.status(500).json({ message: 'Failed to write JSON file' });
  }
});

app.listen(PORT, '0.0.0.0', () => {
  const data = new Date();
  console.log("|--------------------------------------------");
  console.log("| Server       : " + app_name);
  console.log("| Environment  : " + env);
  console.log("| Port         : " + PORT);
  console.log("| Date         : " + data.toJSON().split("T").join(" "));
  console.log("|--------------------------------------------");
  console.log("| Waiting For Database Connection ");
});

process.on("SIGTERM", () => {
  app.close(() => {
    process.exit(0);
  });
});