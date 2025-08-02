require('@babel/register')(); // <-- THIS MUST BE THE FIRST LINE

const express = require('express');
const React = require('react');
const { renderToStream } = require('@react-pdf/renderer');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const MyDocument = require('./PDFDocument.js');

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('React PDF Generation Service is running!');
});

// ROUTE 1: Sends the PDF to the browser/client
app.post('/generate-pdf', async (req, res) => {
  try {
    const data = req.body;
    const pdfStream = await renderToStream(<MyDocument data={data} />);
    res.setHeader('Content-Type', 'application/pdf');
    pdfStream.pipe(res);
  } catch (error) {
    console.error('Error generating PDF stream:', error);
    res.status(500).send('An error occurred.');
  }
});

// ROUTE 2: Saves the PDF locally as 'example.pdf' for you to preview
app.post('/preview-pdf', async (req, res) => {
  try {
    const data = req.body;
    const filePath = path.join(__dirname, 'example.pdf');
    const outputStream = fs.createWriteStream(filePath);
    const pdfStream = await renderToStream(<MyDocument data={data} />);
    pdfStream.pipe(outputStream);

    outputStream.on('finish', () => {
      res.status(200).send(`✅ PDF saved successfully to ${filePath}`);
    });
  } catch (error) {
    console.error('Error generating PDF preview:', error);
    res.status(500).send('An error occurred.');
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});