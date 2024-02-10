const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/your_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Customer Model
const Customer = mongoose.model('Customer', {
  name: String,
  email: String,
  // Add more fields as needed
});

// Routes
app.post('/api/customers', async (req, res) => {
  try {
    const { name, email } = req.body;
    const customer = new Customer({ name, email });
    await customer.save();
    res.status(201).json({ message: 'Customer details saved successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
